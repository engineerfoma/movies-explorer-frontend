import { NavLink } from 'react-router-dom';
import './Account.scss';
import Profile from '../../images/profile.svg';

function Account({ burger, state }) {

    return (
        <NavLink to="/profile" className={`account ${burger && state ? "account__burger" : ""}`} >
            <span className="account__label">
                Аккаунт
            </span>
            <div className="account__logo">
                <img src={Profile} alt="icon" className="account__logo_icon" />
            </div>
        </NavLink>
    )
}

export default Account;