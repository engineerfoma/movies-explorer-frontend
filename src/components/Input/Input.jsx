import './Input.scss';

function Input({ about, placeholder }) {

    return (
        <div className="container">
            <label
                htmlFor={`input-${about}`}
                className={`label label__${about}`}>
                {placeholder}
            </label>
            <input
                type={about === "name" ? `text` : `${about}`}
                id={`input-${about}`}
                name={about}
                placeholder={placeholder}
                className={`input input__${about}`}
                required
            />
        </div>
    )
}

export default Input;