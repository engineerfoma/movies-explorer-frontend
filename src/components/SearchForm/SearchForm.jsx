import { useEffect } from 'react'
import './SearchForm.scss'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
// import ValidationForm from '../../utils/validationForm'

function SearchForm({ handlerToggleCheckbox, stateCheckbox, errorMessage, inputValue, handleChange, getMoviesList, filteredMovies, checkFoundMovies }) {

    // const { values, errors, handleChange } = ValidationForm();

    const onSubmit = (e) => {
        e.preventDefault();
        getMoviesList(inputValue);
    }

    // useEffect(() => {
    //     checkFoundMovies(filteredMovies);
    // }, [checkFoundMovies, filteredMovies])

    return (
        <section className="search">
            <form className="search__form" onSubmit={onSubmit} >
                <input
                    type="text"
                    id="search-input"
                    name="searchFilm"
                    placeholder="Фильм"
                    className="search__input-movie"
                    onChange={handleChange}
                    value={inputValue || ""}
                />
                <button
                    type="submit"
                    className="search__button"

                />
                {errorMessage && <span className="search__form_error search__form_error-search">{errorMessage}</span>}
            </form>
            <FilterCheckbox
                handlerToggleCheckbox={handlerToggleCheckbox}
                stateCheckbox={stateCheckbox}
            />
        </section>
    )
}

export default SearchForm;