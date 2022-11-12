import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Burger.scss';
import BurgerMenu from '../../images/burger.svg';
import Account from '../Account/Account';
import Close from '../../images/close.svg';

function Burger() {

    const [openBurger, setOpenBurger] = useState(false);

    function handlerOpenMenu() {
        setOpenBurger(!openBurger);
    }

    return (
        <div className={`burger burger__${openBurger ? "active" : "disabled"}`} onClick={handlerOpenMenu}>
            <img src={BurgerMenu} alt="burger" className={`burger__menu${!openBurger ? "" : "_disabled"}`} />
            <img src={Close} alt="close" className={`burger__close${!openBurger ? "" : "_active"}`} />
            <div className="burger__active_container">
                <nav className={`burger__nav${!openBurger ? "_disabled" : ""}`}>
                    <ul className="burger__list">
                        <li className="burger__element">
                            <NavLink exact to="/" className="burger__element_link" activeClassName="burger__element_link-active">Главная</NavLink>
                        </li>
                        <li className="burger__element">
                            <NavLink to="/movies" className="burger__element_link" activeClassName="burger__element_link-active">Фильмы</NavLink>
                        </li>
                        <li className="burger__element">
                            <NavLink to="/saved-movies" className="burger__element_link" activeClassName="burger__element_link-active">Сохранённые фильмы</NavLink>
                        </li>
                    </ul>
                </nav>
                <Account
                    state={openBurger}
                    burger="true"
                />
            </div>
        </div>
    )
}

export default Burger;