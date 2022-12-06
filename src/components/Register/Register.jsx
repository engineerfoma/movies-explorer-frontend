import { useEffect } from 'react'
import './Register.scss'
import '../Input/Input.scss'
import AuthSubmit from '../AuthSubmit/AuthSubmit'
import useFormWithValidation from '../../utils/validationForm'

function Register({ onRegister }) {
    const {
        values,
        errors,
        isValid,
        resetForm,
        handleChange,
    } = useFormWithValidation();

    const handlerSubmitForm = (e) => {
        e.preventDefault();
        onRegister(values);
    }

    useEffect(() => {
        resetForm();
    }, [resetForm])

    return (
        <main className="register">
            <form className="form register__form" onSubmit={handlerSubmitForm}>
                <div className="container container__name">
                    <label htmlFor="input-name" className="label label__name">
                        Имя
                    </label>
                    <input
                        type="text"
                        id="input-name"
                        name="name"
                        placeholder="Введите имя"
                        className="input input__name"
                        value={values.name || ""}
                        minLength="2"
                        maxLength="30"
                        onChange={handleChange}
                        required
                        pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
                    />
                    <span className="span login__error">{errors.name}</span>
                </div>
                <div className="container container__email">
                    <label htmlFor="input-email" className="label label__email">
                        E-mail
                    </label>
                    <input
                        type="email"
                        id="input-email"
                        name="email"
                        placeholder="Введите e-mail"
                        className="input input__email"
                        value={values.email || ""}
                        minLength="2"
                        maxLength="30"
                        onChange={handleChange}
                        required
                        pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
                    />
                    <span className="span register__error">{errors.email}</span>
                </div>
                <div className="container container__password">
                    <label htmlFor="input-password" className="label label__password">
                        Пароль
                    </label>
                    <input
                        type="password"
                        id="input-password"
                        name="password"
                        placeholder="Введите пароль"
                        className="input input__password"
                        value={values.password || ""}
                        minLength="2"
                        maxLength="30"
                        onChange={handleChange}
                        required
                    />
                    <span className="span register__error">{errors.password}</span>
                </div>
                <AuthSubmit
                    page="register"
                    textButton="Зарегистрироваться"
                    label="Уже зарегистрированы?"
                    link="/signin"
                    linkText="Войти"
                    isValid={isValid}
                />
            </form>
        </main>
    )
}

export default Register;