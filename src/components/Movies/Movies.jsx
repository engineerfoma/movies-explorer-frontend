import React, { useState, useEffect } from 'react'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { getMovies } from '../../utils/moviesApi'
import { errorMessageFormValidate } from '../../utils/constants'
import './Movies.scss'

function Movies({
    windowWidth,
    savedMovies,
    handleSaveMovie,
    handleRemoveMovie
}) {

    const [isLoading, setIsLoading] = useState(false);
    const [valueSearch, setValueSearch] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [stateCheckbox, setStateCheckbox] = useState(false);
    // const [checkboxMovies, setCheckboxMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [isEmpty, setIsEmpty] = useState(false);
    const [isBadConnection, setIsBadConnection] = useState(false);

    const handlerFilteredMovies = (movies, value, checked) => {
        const filterMovies = movies.filter(
            movie => {
                return movie.nameRU.toLowerCase().includes(value.toLowerCase()) ||
                    movie.nameEN.toLowerCase().includes(value.toLowerCase())
            }
        );
        setFilteredMovies(
            checked ?
                filterMovies.filter(movie => movie.duration <= 40)
                :
                filterMovies
        );
        checkFoundMovies(filterMovies);
    };

    const getMoviesList = (valueSearch) => {
        if (valueSearch) {
            setErrorMessage(null);
            setValueSearch(valueSearch);
            localStorage.setItem('valueSearch', valueSearch);
            localStorage.setItem('stateCheckbox', stateCheckbox);
            if (!localStorage.getItem('movies')) {
                setIsLoading(true);
                getMovies()
                    .then(res => {
                        handlerFilteredMovies(res, valueSearch, stateCheckbox);
                        localStorage.setItem('movies', JSON.stringify(res));
                        localStorage.setItem('filteredMovies', JSON.stringify(res));
                    })
                    .catch(err => {
                        setIsBadConnection(true);
                        console.log(`Ошибка: ${err}`);
                    })
                    .finally(() => {
                        setIsLoading(false);
                    })
            } else {
                setIsLoading(false);
                handlerFilteredMovies(JSON.parse(localStorage.getItem('movies')), valueSearch, stateCheckbox);
            }
        } else {
            setErrorMessage(errorMessageFormValidate);
        }
    }

    const checkFoundMovies = (filteredMovies) => filteredMovies.length === 0 ? setIsEmpty(true) : setIsEmpty(false);

    const handleChange = (e) => setValueSearch(e.target.value);

    const handlerToggleCheckbox = () => {
        setStateCheckbox(!stateCheckbox);
        localStorage.setItem('stateCheckbox', !stateCheckbox);
    };

    // useEffect(() => {
    //     let count;
    //     if (windowWidth >= 1280) {
    //      count = 12
    //     } else if (windowWidth >= 768) {
    //      count = 8
    //     } else if (windowWidth >= 320) {
    //      count = 5
    //     }
    //    filteredMovies.length > count ? setDisplayMovies(filteredMovies.slice(0,count)) : setDisplayMovies(filteredMovies);
    //   }, [windowWidth, filteredMovies])

    useEffect(() => {
        if (localStorage.getItem('filteredMovies')) {
            setFilteredMovies(JSON.parse(localStorage.getItem('filteredMovies')));
        }

        if (localStorage.getItem('valueSearch')) {
            setValueSearch(localStorage.getItem('valueSearch'));
        }

        localStorage.getItem('stateCheckbox') === 'true' ? setStateCheckbox(true) : setStateCheckbox(false);
    }, []);

    useEffect(() => {
        const inputValue = localStorage.getItem('valueSearch');
        const resultMovies = JSON.parse(localStorage.getItem('filteredMovies'));
        if (inputValue && resultMovies) {
            handlerFilteredMovies(resultMovies, inputValue, stateCheckbox);
        }
    }, [stateCheckbox, valueSearch]);

    return (
        <main>
            <SearchForm
                handlerToggleCheckbox={handlerToggleCheckbox}
                stateCheckbox={stateCheckbox}
                errorMessage={errorMessage}
                inputValue={valueSearch}
                handleChange={handleChange}
                saveFilm={false}
                getMoviesList={getMoviesList}
                checkFoundMovies={checkFoundMovies}
                filteredMovies={filteredMovies}
            />
            {isLoading && <Preloader />}
            {isEmpty && !isBadConnection &&
                <span className="movies__error movies__error_not-found">Ничего не найдено</span>
            }

            {isBadConnection &&
                <span className="movies__error movies__error_bad-connection">Во время запроса произошла ошибка.
                    Возможно, проблема с соединением или сервер недоступен.
                    Подождите немного и попробуйте ещё раз</span>
            }
            {!isEmpty && !isBadConnection &&
                <MoviesCardList
                    setFilteredMovies={setFilteredMovies}
                    filteredMovies={filteredMovies}
                    windowWidth={windowWidth}
                    handleAddLikeMovie={handleSaveMovie}
                    handleRemoveLikeMovie={handleRemoveMovie}
                    savedMovies={savedMovies}
                />
            }
        </main>
    )
}

export default Movies;