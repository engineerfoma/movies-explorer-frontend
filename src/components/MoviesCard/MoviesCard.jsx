import './MoviesCard.scss';

function MoviesCard({ movie }) {
    return (
        <li className="list-element">
            <div className="list-element__container">
                <h3 className="list-element__title">В погоне за Бенкси</h3>
                <span className="list-element__duration">27 минут</span>

            </div>
            <img src={movie} alt="movie" className="list-element__img" />
            <button type="button" className="list-element__button_save" />
        </li>
    )
}

export default MoviesCard;