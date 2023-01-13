import './FilterCheckbox.scss'

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