import logo from '../../images/logo_main.svg';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Лого" className="header__logo" />
            <nav className="header__nav">
                <Link to="/signup" className="header__nav_link header__nav_link-reg">Регистрация</Link>
                <Link to="/signin" className="header__nav_link header__nav_link-in">Войти</Link>
            </nav>
        </header>
    )
}

export default Header;