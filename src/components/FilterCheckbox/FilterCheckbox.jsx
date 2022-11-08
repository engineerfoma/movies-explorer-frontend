import './FilterCheckbox.scss';

function FilterCheckbox() {
    return (
        <section className="filter">
            <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                className="filter__input_checkbox"
            />
            <label
                for="checkbox"
                className="filter__checkbox"></label>
            <p className="filter__label">Короткометражки</p>
        </section>
    )
}

export default FilterCheckbox;