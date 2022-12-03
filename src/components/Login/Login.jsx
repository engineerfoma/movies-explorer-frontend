import './Login.scss'
import AuthSubmit from '../AuthSubmit/AuthSubmit'
import Input from '../Input/Input'
import useFormWithValidation from '../../utils/validationForm'

function Login({
    onLogin,
    errorMessage,
    setErrorMessage
}) {

    const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation();

    const handlerSubmitForm = (e) => {
        e.preventDefault();
        onLogin(values);
    }

    return (
        <main className="login">
            <form className="form login__form" onSubmit={handlerSubmitForm}>
                <Input
                    about="email"
                    placeholder="E-mail"
                    onChange={handleChange}
                    values={values}
                    pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
                />
                <span className="span login__error">{errors.email}</span>
                <Input
                    about="password"
                    placeholder="Пароль"
                    onChange={handleChange}
                    values={values}
                />
                <span className="span login__error">{errors.password}</span>
                <AuthSubmit
                    page="login"
                    textButton="Войти"
                    label="Ещё не зарегистрированы?"
                    link="/signup"
                    linkText="Регистрация"
                />
            </form>
        </main>
    )
}

export default Login;