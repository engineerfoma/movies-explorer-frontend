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
                {/* <Input
                    about="email"
                    placeholder="E-mail"
                    onChange={handleChange}
                    values={values}
                    pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
                />
                <span className="span login__error">{errors.email}</span> */}
                <div className="container container__email">
                    <label htmlFor="input-email" className="label label__email">
                        E-mail
                    </label>
                    <input
                        type="email"
                        id="input-email"
                        name="email"
                        placeholder="Введите email"
                        className="input input__email"
                        value={values.email || ""}
                        onChange={handleChange}
                        required
                        pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
                    />
                    <span className="span register__error">{errors.email}</span>
                </div>
                {/* <Input
                    about="password"
                    placeholder="Пароль"
                    onChange={handleChange}
                    values={values}
                />
                <span className="span login__error">{errors.password}</span> */}
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
                        onChange={handleChange}
                        required
                    />
                    <span className="span register__error">{errors.password}</span>
                </div>

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