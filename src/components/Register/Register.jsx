import './Register.scss';
import Input from '../Input/Input';
import AuthSubmit from '../AuthSubmit/AuthSubmit';

function Register() {
    return (
        <main className="register">
            <form className="form register__form">
                <Input
                    about="name"
                    placeholder="Имя"
                />
                <Input
                    about="email"
                    placeholder="E-mail"
                />
                <Input
                    about="password"
                    placeholder="Пароль"
                />
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