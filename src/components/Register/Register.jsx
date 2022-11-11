import './Register.scss';
import Input from '../Input/Input';

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
                
            </form>
        </main>
    )
}

export default Register;