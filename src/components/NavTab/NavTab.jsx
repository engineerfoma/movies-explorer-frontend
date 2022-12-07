import './NavTab.scss'
import { NavLink } from 'react-router-dom'

function NavTab() {

    return (
        <ul className="navigation__list">
            <li className="navigation__element">
                <NavLink to="/movies" className="navigation__element_link" activeClassName="navigation__element_link-active">Фильмы</NavLink>
            </li>
            <li className="navigation__element">
                <NavLink to="/saved-movies" className="navigation__element_link" activeClassName="navigation__element_link-active">Сохранённые фильмы</NavLink>
            </li>
        </ul>
    )
}

export default NavTab;