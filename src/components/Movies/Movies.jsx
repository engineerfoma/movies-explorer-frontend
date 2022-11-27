import React, { useState, useEffect } from 'react'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import MoreMovies from '../MoreMovies/MoreMovies'
import { getMovies } from '../../utils/moviesApi'
import useFormWithValidation from '../../utils/validationForm'
import { errorMessageFormValidate } from '../../utils/constants'

function Movies() {

    const [isLoading, setIsLoading] = useState(false);
    const [valueSearch, setValueSearch] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [stateCheckbox, setStateCheckbox] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const windowWidth = useFormWithValidation().width;

    const handlerToggleCheckbox = () => {
        setStateCheckbox(!stateCheckbox);
        localStorage.setItem('setStateCheckbox', !stateCheckbox);
    };

    const handlerFilteredMovies = (movies, value, checked) => {
        const filter = movies.filter(movie => movie.nameRU.toLowerCase().includes(value.toLowerCase()));
        setFilteredMovies(
            checked ?
                filter.filter(movie => movie.duration <= 40)
                :
                filter
        );
    };

    const handleSubmit = (valueSearch) => {
        if (valueSearch) {
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
                    .catch(err => console.log(`Ошибка: ${err}`))
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

    useEffect(() => {
        const inputValue = localStorage.getItem('valueSearch');
        const resultMovies = JSON.parse(localStorage.getItem('filteredMovies'));
        if (inputValue && resultMovies) {
            handlerFilteredMovies(resultMovies, inputValue, stateCheckbox);
        }
    }, [valueSearch, stateCheckbox]);

    useEffect(() => {
        if (localStorage.getItem('filteredMovies')) {
            setFilteredMovies(JSON.parse(localStorage.getItem('filteredMovies')));
        };
        localStorage.getItem('isToggleCheckbox') ? setStateCheckbox(true) : setStateCheckbox(false);
        if (localStorage.getItem('valueSearch')) {
            setValueSearch(localStorage.getItem('valueSearch'));
        }
    }, []);

    return (
        <main>
            <SearchForm
                onSubmit={handleSubmit}
                handlerToggleCheckbox={handlerToggleCheckbox}
                isToggleCheckbox={stateCheckbox}
                errorMessage={errorMessage}
                />
            {isLoading && <Preloader />}

            <MoviesCardList
                filteredMovies={filteredMovies}
                errorMessage={errorMessage}
            />
            <MoreMovies />
        </main>
    )
}

export default Movies;