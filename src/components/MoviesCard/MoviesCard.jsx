import './MoviesCard.scss';
import { useState } from 'react';

function MoviesCard({ movie }) {
    
    const [ activeButton, setActiveButton] = useState(false);

    function toggleButton () {
        setActiveButton(!activeButton);
    }

    return (
        <li className="list-element">
            <div className="list-element__container">
                <h3 className="list-element__title">{movie.title}</h3>
                <span className="list-element__duration">{movie.duration}</span>

            </div>
            <img src={movie.poster} alt="movie" className="list-element__img" />
            <button type="button" onClick={toggleButton} className={ !activeButton ? `list-element__button_save` : `list-element__button_default`} />
        </li>
    )
}

export default MoviesCard;