import './Burger.scss';
import BurgerMenu from '../../images/burger.svg';

function Burger() {
    return (
        <div className="burger">
            <img src={BurgerMenu} alt="burger" className="burger__menu" />
        </div>
    )
}

export default Burger;