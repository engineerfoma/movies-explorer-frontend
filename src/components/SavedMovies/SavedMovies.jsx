import { useState, useEffect } from 'react'
import './SavedMovies.scss'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { errorMessageFormValidate } from '../../utils/constants'

function SavedMovies({
    errorMessage,
    setErrorMessage,
    windowWidth,
    savedMovies,
    handleRemoveMovie
}) {

    const [filteredMovies, setFilteredMovies] = useState(savedMovies);
    const [inputQuery, setInputQuery] = useState('');
    const [stateCheckbox, setStateCheckbox] = useState(false);

    const changeCheckbox = () => {
        setStateCheckbox(!stateCheckbox);
    }

    // const checkFoundMovies = (filteredMovies) => filteredMovies.length === 0 ? setIsEmpty(true) : setIsEmpty(false);

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
        // checkFoundMovies(filterMovies);
    };

    const handleSearchSubmit = (input) => {
        if (input) {
            setErrorMessage(null);
            setInputQuery(input);
            handlerFilteredMovies(savedMovies, inputQuery, stateCheckbox);
        } else {
            setErrorMessage(errorMessageFormValidate)
        }
    };


    useEffect(() => {
        handlerFilteredMovies(savedMovies, inputQuery, stateCheckbox);
    }, [savedMovies, inputQuery, stateCheckbox]);

    return (
        <main>
            <SearchForm
                onSubmit={handleSearchSubmit}
                changeCheckbox={changeCheckbox}
                stateCheckbox={stateCheckbox}
                savePage={true}
                errorMessage={errorMessage}
            />
            <MoviesCardList
                filteredMovies={filteredMovies}
                savedMovies={savedMovies}
                handleRemoveMovie={handleRemoveMovie}
                windowWidth={windowWidth}
                errorMessage={errorMessage}
            />
        </main>
    )
}

export default SavedMovies;