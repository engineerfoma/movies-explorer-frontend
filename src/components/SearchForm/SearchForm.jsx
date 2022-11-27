import { useEffect } from 'react'
import './SearchForm.scss'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import ValidationForm from '../../utils/validationForm'

function SearchForm({ onSubmit, handlerToggleCheckbox, stateCheckbox, errorMessage, inputValue }) {

    const { values, errors, handleChange } = ValidationForm();

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(values.searchFilm);
    }

    useEffect(() => {
     
    }, [])

    return (
        <section className="search">
            <form className="search__form" onSubmit={handleSubmit} >
                <input
                    type="text"
                    id="search-input"
                    name="searchFilm"
                    placeholder="Фильм"
                    className="search__input-movie"
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className="search__button"

                />
            {errorMessage ? <span className="search__form_error search__form_error-search">{errorMessage}</span> : ""}
            </form>
            <FilterCheckbox
                handlerToggleCheckbox={handlerToggleCheckbox}
                stateCheckbox={stateCheckbox}
            />
        </section>
    )
}

export default SearchForm;