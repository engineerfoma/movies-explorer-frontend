import './HeaderAuth.scss';
import { Link } from 'react-router-dom';

function HeaderAuth({ title, logo }) {
    return (
        <header className="header header__auth">
            <div className="header__container">
                <Link to="/">
                    <img src={logo} alt="logo" className="header__logo header__logo_auth" />
                </Link>
                <h1 className="header__title">{title}</h1>
            </div>
        </header>
    )
}

export default HeaderAuth;