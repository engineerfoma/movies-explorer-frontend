import './Navigation.scss';
import { NavLink } from 'react-router-dom';
import NavTab from '../NavTab/NavTab';

function Navigation() {

    return (
        <nav className="navigation">
            <NavTab />
        </nav>
    )
}

export default Navigation;