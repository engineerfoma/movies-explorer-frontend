import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreMovies from '../MoreMovies/MoreMovies';
import { getMovies } from '../../utils/moviesApi';

function Movies({ isLoading, setIsLoading }) {

    const [valueSearch, setValueSearch] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);

    const handlerFilteredMovies = (movies, value) => {
        const filter = movies.filter(movie => movie.nameRU.toLowerCase().includes(value.toLowerCase()))
        setFilteredMovies(filter);
    }

    const handleSubmit = (valueSearch) => {
        setIsLoading(true);
        if (valueSearch) {
            setValueSearch(valueSearch);
            localStorage.setItem('valueSearch', valueSearch);
            if (!localStorage.getItem('movies')) {
                getMovies()
                    .then(res => {
                        handlerFilteredMovies(res, valueSearch);
                        localStorage.setItem('movies', JSON.stringify(res));
                        localStorage.setItem('filteredMovies', JSON.stringify(res));
                    })
                    .catch(err => console.log(`Ошибка: ${err}`))
                    .finally(() => {
                        setIsLoading(false);
                    })
            } else {
                handlerFilteredMovies(JSON.parse(localStorage.getItem('movies')), valueSearch);
                setIsLoading(false);
            }
        }
    }

    useEffect(() => {
        const inputValue = localStorage.getItem('valueSearch');
        const resultMovies = JSON.parse(localStorage.getItem('filteredMovies'));
        if (inputValue && resultMovies) {
            handlerFilteredMovies(resultMovies, inputValue);
        }
    }, [valueSearch])

    return (
        <main>
            <SearchForm
                onSubmit={handleSubmit}
            />
            {isLoading ?
                <Preloader />
                :
                <MoviesCardList
                    filteredMovies={filteredMovies}
                />
            }
            <MoreMovies />
        </main>
    )
}

export default Movies;