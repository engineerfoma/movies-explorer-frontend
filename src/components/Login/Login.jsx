import './Login.scss';
import AuthSubmit from '../AuthSubmit/AuthSubmit';
import Input from '../Input/Input';


function Login() {
    return (
        <main className="login">
            <form className="form login__form">
                <Input
                    about="email"
                    placeholder="E-mail"
                />
                <Input
                    about="password"
                    placeholder="Пароль"
                />
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