import './SearchForm.scss';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return (
        <section className="search">
            <form className="search__form">
                <input
                    type="text"
                    id="search-input"
                    name="searchFilm"
                    placeholder="Фильм"
                    className="search__input-movie"
                />
                <button type="submit" className="search__button" />
            </form>
            <FilterCheckbox />
        </section>
    )
}

export default SearchForm;