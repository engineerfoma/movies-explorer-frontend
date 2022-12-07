import { Route, Link } from 'react-router-dom'
import './Header.scss'
import Logo from '../../images/logo_main.svg'
import HeaderAuth from '../HeaderAuth/HeaderAuth'
import Navigation from '../Navigation/Navigation'
import Burger from '../Burger/Burger'
import Account from '../Account/Account'

function Header({ loggedIn }) {
    const PathMovies = ['/movies', '/saved-movies', '/profile'];

    return (
        <>
            <Route exact path="/">
                {!loggedIn ? 
                (<header className="header">
                    <img src={Logo} alt="Лого" className="header__logo" />
                    <nav className="header__nav">
                        <Link to="/signup" className="header__nav_link header__nav_link-reg">Регистрация</Link>
                        <Link to="/signin" className="header__nav_link header__nav_link-in">Войти</Link>
                    </nav>
                </header>)
                :
                (
                    <header className="header header__main header__main_logged">
                    <Link to="/">
                        <img src={Logo} alt="лого" className="header__logo" />
                    </Link>
                    <Navigation
                        loggedIn={loggedIn}
                    />
                    <Account />
                    <Burger />
                </header>
                )
            }
            </Route>
            <Route path="/signin">
                <HeaderAuth
                    logo={Logo}
                    title="Рады видеть!"
                />
            </Route>
            <Route path="/signup">
                <HeaderAuth
                    logo={Logo}
                    title="Добро пожаловать!"
                />
            </Route>
            <Route path={PathMovies}>
                <header className="header header__main">
                    <Link to="/">
                        <img src={Logo} alt="лого" className="header__logo" />
                    </Link>
                    <Navigation
                        loggedIn={loggedIn}
                    />
                    <Account />
                    <Burger />
                </header>
            </Route>
        </>
    )
}

export default Header;