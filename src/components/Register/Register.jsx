import { useEffect } from 'react'
import './Register.scss'
import Input from '../Input/Input'
import AuthSubmit from '../AuthSubmit/AuthSubmit'
import useFormWithValidation from '../../utils/validationForm'

function Register({ errorMessage, onRegister }) {
    const {
        values,
        errors,
        isValid,
        handleChange,
        resetForm,
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
                <Input
                    about="name"
                    placeholder="Имя"
                    pattern="^[A-Za-zА-Яа-я-\s]+$"
                    onChange={handleChange}
                    minLength="2"
                    maxLength="30"
                    values={values}
                />
                <span className="span register__error">{errors.name}</span>
                <Input
                    about="email"
                    placeholder="E-mail"
                    onChange={handleChange}
                    pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
                    values={values}
                />
                <span className="span register__error">{errors.email}</span>
                <Input
                    about="password"
                    placeholder="Пароль"
                    onChange={handleChange}
                    values={values}
                />
                <span className="span register__password">{errors.email}</span>
                <AuthSubmit
                    page="register"
                    textButton="Зарегистрироваться"
                    label="Уже зарегистрированы?"
                    link="/signin"
                    linkText="Войти"
                />
            </form>
        </main>
    )
}

export default Register;