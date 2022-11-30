import React, { useState, useEffect } from 'react'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import MoreMovies from '../MoreMovies/MoreMovies'
import { getMovies } from '../../utils/moviesApi'
import useFormWithValidation from '../../utils/validationForm'
import { errorMessageFormValidate } from '../../utils/constants'
import './Movies.scss'

function Movies() {

    const [isLoading, setIsLoading] = useState(false);
    const [valueSearch, setValueSearch] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [stateCheckbox, setStateCheckbox] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isEmpty, setIsEmpty] = useState(false);
    const [isBadConnection, setIsBadConnection] = useState(false);

    const windowWidth = useFormWithValidation().width;

    const handlerFilteredMovies = (movies, value, checked) => {
        const filterMovies = movies.filter(
            movie => movie.nameRU.toLowerCase().includes(value.toLowerCase()) ||
                movie.nameEN.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredMovies(
            checked ?
                filterMovies.filter(movie => movie.duration <= 40)
                :
                filterMovies
        );
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
                        console.log(`Ошибка: ${err}`)
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

    useEffect(() => {
        if (localStorage.getItem('valueSearch')) {
            setValueSearch(localStorage.getItem('valueSearch'));
        }

        if (localStorage.getItem('filteredMovies')) {
            setFilteredMovies(JSON.parse(localStorage.getItem('filteredMovies')));
        };

        localStorage.getItem('stateCheckbox') === 'true' ? setStateCheckbox(true) : setStateCheckbox(false);
    }, []);

    useEffect(() => {
        const inputValue = localStorage.getItem('valueSearch');
        const resultMovies = JSON.parse(localStorage.getItem('filteredMovies'));
        if (inputValue && resultMovies) {
            handlerFilteredMovies(resultMovies, inputValue, stateCheckbox);
            checkFoundMovies(filteredMovies);
        }
    }, [stateCheckbox, valueSearch, filteredMovies]);

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
            />
            {isLoading && <Preloader />}
            {isEmpty ?
                <span className="movies__error movies__error_not-found">Ничего не найдено</span>
                :
                ""
            }

            {isBadConnection ?
                <span className="movies__error movies__error_bad-connection">Во время запроса произошла ошибка.
                    Возможно, проблема с соединением или сервер недоступен.
                    Подождите немного и попробуйте ещё раз</span>
                :
                ""
            }
            {!isEmpty && !isBadConnection ?
                <MoviesCardList
                    filteredMovies={filteredMovies}
                    errorMessage={errorMessage}
                />
                :
                ""
            }
            {/* <MoreMovies /> */}
        </main>
    )
}

export default Movies;