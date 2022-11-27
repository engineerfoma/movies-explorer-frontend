import './SearchForm.scss';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import ValidationForm from '../../utils/validationForm';

function SearchForm( { onSubmit }) {

    const { values, errors, isValid, handleChange } = ValidationForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        onSubmit(values.searchFilm);
    }

    return (
        <section className="search">
            <form className="search__form" onSubmit={handleSubmit} isvalid={isValid}>
                <input
                    type="text"
                    id="search-input"
                    name="searchFilm"
                    placeholder="Фильм"
                    className="search__input-movie"
                    onChange={handleChange}
                    value={values.searchFilm || ""}
                    errormessage={errors.name}
                 
                />
                <button type="submit" className="search__button"/>
            </form>
            <FilterCheckbox />
        </section>
    )
}

export default SearchForm;