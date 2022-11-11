import './Login.scss';
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
        
            </form>
        </main>
    )
}

export default Login;