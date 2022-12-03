import './Input.scss'

function Input({
    about,
    placeholder,
    state,
    values,
    pattern,
    onChange,
    minLength,
    maxLength }) {

    return (
        <div className={`container${state ? "__profile" : ""} container__${about}`}>
            <label
                htmlFor={`input-${about}`}
                className={`label label__${about} ${state ? "label__profile" : ""}`}>
                {placeholder}
            </label>
            <input
                type={about === "name" ? `text` : `${about}`}
                id={`input-${about}`}
                name={about}
                onChange={onChange}
                placeholder={placeholder}
                className={`input input__${about}`}
                value={`${values}.${about}` || ""}
                required
                pattern={pattern}
                minLength={minLength}
                maxLength={maxLength}
            />
        </div>
    )
}

export default Input;