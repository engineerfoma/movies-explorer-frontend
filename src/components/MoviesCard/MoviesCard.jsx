import './MoviesCard.scss';
// import { useState } from 'react';

function MoviesCard({ remove, movie }) {

    // const [activeButton, setActiveButton] = useState(false);

    // function toggleButton() {
    //     setActiveButton(!activeButton);
    // }

    return (
        <li className="list-element">
            <div className="list-element__container">
                <h3 className="list-element__title">{}</h3>
                <span className="list-element__duration">{movie.duration}</span>
            </div>
            <img src={movie.image.url} alt="фильм" className="list-element__img" />
            <button type="button" className={`list-element__button_default list-element__button${!remove ? `_save` : `_remove`}`} />
        </li>



    )
}

export default MoviesCard;