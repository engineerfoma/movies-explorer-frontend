import { useState, useEffect } from 'react'
import './SavedMovies.scss'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { errorMessageFormValidate } from '../../utils/constants'

function SavedMovies({
    errorMessage,
    savedMovies,
    setSavedMovies,
    handleRemoveMovie,
    films
}) {

    const [checkboxValue, setCheckboxValue] = useState(false);
    const [queryMovies, setQueryMovies] = useState([]);
    const [checkboxMovies, setCheckboxMovies] = useState([]);
    const [searchMovies, setSearchMovies] = useState([]);
    const [searchActive, setSearchActive] = useState(false);
    const [queryActive, setQueryActive] = useState(false);
    const [searchError, setSearchError] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const savePage = true;

    useEffect(() => {
        setQueryMovies(films);
        if (checkboxValue && !queryActive) {
            setQueryMovies(films.filter((movie) => movie.duration <= 40))
        }
        if (checkboxValue && queryActive) {
            setQueryMovies(searchMovies.filter((movie) => movie.duration <= 40))
        }
        if (!checkboxValue && queryActive) {
            setQueryMovies(searchMovies)
        }
    }, [checkboxValue, films, checkboxMovies, queryActive, searchMovies])

    function handlerToggleCheckbox() {
        setCheckboxValue(!checkboxValue);
        if (inputValue) {
            setSearchActive(false)
            handleSavedShowFilms(inputValue)
            setQueryActive(true)
        } else {
            setQueryActive(false)
        }
    }

    function handleInputValueChange(e) {
        setInputValue(e.target.value);
    }

    function handleShowSavedFilms() {
        if (inputValue) {
            handleSavedShowFilms(inputValue)
            setSearchActive(false)
            setQueryActive(true)
        } else {
            setSearchActive(true)
            setQueryActive(false)
        }
    }

    function handleSavedShowFilms(inputValue) {
        const queryMoviesSearchArray = films.filter((movie) => {
            return movie.nameEN.toLowerCase().includes(inputValue.toLowerCase()) ||
                movie.nameRU.toLowerCase().includes(inputValue.toLowerCase())
        })
        setSearchMovies(queryMoviesSearchArray)
        if (checkboxValue) {
            setCheckboxMovies(queryMoviesSearchArray.filter((movie) => movie.duration <= 40))
        }
        if (queryMoviesSearchArray.length === 0) {
            setSearchError(true)
        } else {
            setSearchError(false)
        }
    }



    // const [filteredMovies, setFilteredMovies] = useState(savedMovies);
    // const [inputQuery, setInputQuery] = useState('');
    // const [stateCheckbox, setStateCheckbox] = useState(false);

    // // const checkFoundMovies = (filteredMovies) => filteredMovies.length === 0 ? setIsEmpty(true) : setIsEmpty(false);

    // const handlerFilteredMovies = (movies, value, checked) => {
    //     const filterMovies = movies.filter(
    //         movie => {
    //             return movie.nameRU.toLowerCase().includes(value.toLowerCase()) ||
    //                 movie.nameEN.toLowerCase().includes(value.toLowerCase())
    //         }
    //     );
    //     setFilteredMovies(
    //         checked ?
    //             filterMovies.filter(movie => movie.duration <= 40)
    //             :
    //             filterMovies
    //     );
    //     // checkFoundMovies(filterMovies);
    // };

    // const handleChange = (e) => setInputQuery(e.target.value);

    // const handleSearchSubmit = (input) => {
    //     if (input) {
    //         setErrorMessage(null);
    //         setInputQuery(input);
    //         handlerFilteredMovies(savedMovies, inputQuery, stateCheckbox);
    //     } else {
    //         setErrorMessage(errorMessageFormValidate)
    //     }
    // };

    // const handlerToggleCheckbox = () => {
    //     setStateCheckbox(!stateCheckbox);
    // }

    // useEffect(() => {
    //     handlerFilteredMovies(savedMovies, inputQuery, stateCheckbox);
    // }, [savedMovies, inputQuery, stateCheckbox]);

    return (
        <main>
            <SearchForm
                stateCheckbox={checkboxValue}
                handlerToggleCheckbox={handlerToggleCheckbox}
                inputValue={inputValue}
                handleChange={handleInputValueChange}
                getMoviesList={handleShowSavedFilms}
                errorMessage={errorMessage}
            />
            {films.length !== 0 &&
                <MoviesCardList
                    filteredMovies={queryMovies}
                    handleRemoveMovie={handleRemoveMovie}
                    setPageMovies={setSavedMovies}
                    savePage={savePage}
                    savedMovies={savedMovies}
                />}
        </main>
    )
}

export default SavedMovies;