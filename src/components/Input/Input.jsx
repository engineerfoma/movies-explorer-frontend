import './Input.scss';

function Input({ about, placeholder, value, state }) {

    return (
        <div className="container">
            <label
                htmlFor={`input-${about}`}
                className={`label label__${about}`}>
                {placeholder}
            </label>
            {state ? (
                <input
                    type={about === "name" ? `text` : `${about}`}
                    id={`input-${about}`}
                    name={about}
                    placeholder={placeholder}
                    className={`input input__${about}`}
                    value={value}
                    required
                    readOnly
                />
            ) : (
                <input
                    type={about === "name" ? `text` : `${about}`}
                    id={`input-${about}`}
                    name={about}
                    placeholder={placeholder}
                    className={`input input__${about}`}
                    value={value}
                    required
                />
            )
            }

        </div>
    )
}

export default Input;