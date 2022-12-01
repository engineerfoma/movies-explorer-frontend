import './MoviesCard.scss'
import { useHistory } from 'react-router-dom';
import { MOVIES_URL } from "../../utils/constants"
import { useState } from 'react'

function MoviesCard({
    movie,
    handleSaveMovie,
    handleRemoveMovie,
    savedMovies
}) {

    const history = useHistory();

    const [activeButton, setActiveButton] = useState(true);

    const getTimeFromMins = (duration) => {
        let hours = Math.trunc(duration / 60);
        let minutes = duration % 60;
        return `${hours} ч ${minutes} мин`;
    }

    const duration = getTimeFromMins(movie.duration)

    const handleSaveClick = () => {
        setActiveButton(!activeButton);
        handleSaveMovie(savedMovies)
    }

    const handleDeleteClick = () => {
        handleRemoveMovie(movie)
    }

    return (
        <li className="list-element">
            <a href={movie.trailerLink} className="list-element_link" target="_blank">
                <div className="list-element__container">
                    <h3 className="list-element__title">{movie.nameRU}</h3>
                    <span className="list-element__duration">{duration}</span>
                </div>
                {history.location.pathname === "/movies" && (
                    <img src={`${MOVIES_URL}${movie.image.url}`} alt="фильм" className="list-element__img" />
                )}
                {history.location.pathname === "/saved-movies" && (
                    <img src={movie.image} alt="фильм" className="list-element__img" />

                )}
            </a>
            {history.location.pathname === "/movies" && (
                <button type="button" className={`list-element__button_default ${activeButton ? "list-element__button_saved" : ""}`} onClick={handleSaveClick} />
            )}
            {history.location.pathname === "/saved-movies" && (
                <button type="button" className="list-element__button_default list-element__button_remove" onClick={handleDeleteClick} />
            )}
        </li>
    )
}

export default MoviesCard;