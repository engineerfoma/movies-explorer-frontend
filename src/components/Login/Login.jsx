import './Login.scss'
import AuthSubmit from '../AuthSubmit/AuthSubmit'
import useFormWithValidation from '../../utils/validationForm'

function Login({ onLogin }) {

    const { values, errors, isValid, handleChange } = useFormWithValidation();

    const handlerSubmitForm = (e) => {
        e.preventDefault();
        onLogin(values);
    }

    return (
        <main className="login">
            <form className="form login__form" onSubmit={handlerSubmitForm} noValidate>
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
                    isValid={isValid}
                />
            </form>
        </main>
    )
}

export default Login;