import './FilterCheckbox.scss';

function FilterCheckbox({ handlerToggleCheckbox, stateCheckbox }) {
    return (
        <section className="filter">
            <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                checked={stateCheckbox}
                onChange={handlerToggleCheckbox}
                className="filter__input_checkbox"
            />
            <label
                htmlFor="checkbox"
                className="filter__checkbox"></label>
            <p className="filter__label">Короткометражки</p>
        </section>
    )
}

export default FilterCheckbox;


// import { useEffect } from 'react'
// import './SearchForm.scss'
// import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
// import ValidationForm from '../../utils/validationForm'

// function SearchForm({ onSubmit, handlerToggleCheckbox, stateCheckbox, errorMessage, inputValue, handleChange, saveFilm }) {

//     const { values, setValues } = ValidationForm();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSubmit(values.searchFilm);
//     }

//     useEffect(() => {
//         if (!saveFilm) {
//             const inputValue = localStorage.getItem('searchTask');
//             if (inputValue) {
//                 setValues({ search: inputValue });
//             };
//         };
//     }, [setValues, saveFilm]);

//     return (
//         <section className="search">
//             <form className="search__form" onSubmit={handleSubmit} >
//                 <input
//                     type="text"
//                     id="search-input"
//                     name="searchFilm"
//                     placeholder="Фильм"
//                     className="search__input-movie"
//                     onChange={handleChange}
//                     value={inputValue || ""}
//                 />
//                 <button
//                     type="submit"
//                     className="search__button"

//                 />
//             {errorMessage ? <span className="search__form_error search__form_error-search">{errorMessage}</span> : ""}
//             </form>
//             <FilterCheckbox
//                 handlerToggleCheckbox={handlerToggleCheckbox}
//                 stateCheckbox={stateCheckbox}
//             />
//         </section>
//     )
// }

// export default SearchForm;