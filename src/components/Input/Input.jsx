import './Input.scss';

function Input({ about, placeholder, value, state }) {

    return (
        <div className={`container${state ? "__profile" : ""} container__${about}`}>
            <label
                htmlFor={`input-${about}`}
                className={`label label__${about} ${state ? "label__profile" : ""}`}>
                {placeholder}
            </label>
            {state ? (
                <input
                    type={about === "name" ? `text` : `${about}`}
                    id={`input-${about}`}
                    name={about}
                    placeholder={placeholder}
                    className={`input input__profile input__${about}`}
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