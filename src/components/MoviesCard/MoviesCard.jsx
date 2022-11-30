import './MoviesCard.scss'
import { MOVIES_URL } from "../../utils/constants"
// import { useState } from 'react'

function MoviesCard({ remove, movie }) {

    // const [activeButton, setActiveButton] = useState(false);

    // function toggleButton() {
    //     setActiveButton(!activeButton);
    // }

    return (
        <li className="list-element">
            <a href={movie.trailerLink} className="list-element_link" target="_blank">
                <div className="list-element__container">
                    <h3 className="list-element__title">{movie.nameRU}</h3>
                    <span className="list-element__duration">{movie.duration} минут</span>
                </div>
                <img src={`${MOVIES_URL}${movie.image.url}`} alt="фильм" className="list-element__img" />
            </a>
            <button type="button" className={`list-element__button_default list-element__button${!remove ? `_save` : `_remove`}`} />
        </li>



    )
}

export default MoviesCard;