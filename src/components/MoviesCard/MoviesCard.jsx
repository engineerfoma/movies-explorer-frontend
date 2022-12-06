import './MoviesCard.scss'
import { useHistory } from 'react-router-dom';
import { MOVIES_URL } from "../../utils/constants"
import { useState, useEffect } from 'react'

function MoviesCard(props) {

    const history = useHistory();
    const isLiked = props.savedMovies.find(m => m.movieId === props.movie.id) || "";

    const handlerToggleSave = () => {
        if (isLiked) {
            props.handleRemoveMovie(props.movie.id);

        } else {
            props.handleSaveMovie(props.movie);
        }
    };

    const handleDeleteClick = () => {
        props.handleRemoveMovie(props.movie._id);
    };

    const getTimeFromMins = (duration) => {
        let hours = Math.trunc(duration / 60);
        let minutes = duration % 60;
        return `${hours} ч ${minutes} мин`;
    };
    const duration = getTimeFromMins(props.movie.duration);


    return (
        <li className="list-element">
            <a href={props.movie.trailerLink} rel="noreferrer" className="list-element_link" target="_blank">
                <div className="list-element__container">
                    <h3 className="list-element__title">{props.movie.nameRU}</h3>
                    <span className="list-element__duration">{duration}</span>
                </div>
                {history.location.pathname === "/movies" && (
                    <img src={`${MOVIES_URL}${props.movie.image.url}`} alt="фильм" className="list-element__img" />
                )}
                {history.location.pathname === "/saved-movies" && (
                    <img src={props.movie.image} alt="фильм" className="list-element__img" />

                )}
            </a>
            {history.location.pathname === "/movies" && (
                <button type="button" className={`list-element__button_default ${!isLiked ? "list-element__button_saved" : ""}`} onClick={handlerToggleSave} />
            )}
            {history.location.pathname === "/saved-movies" && (
                <button type="button" className="list-element__button_default list-element__button_remove" onClick={handleDeleteClick} />
            )}
        </li>
    )
}

export default MoviesCard;