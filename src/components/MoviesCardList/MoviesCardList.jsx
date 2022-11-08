import './MoviesCardList.scss';
import MoviesCard from '../MoviesCard/MoviesCard';
import { movies, key } from '../../utils/constants.js';

function MoviesCardList() {
    return (
        <section className="gallery">
            <ul className="gallery__list">
                {movies.map((item) => {
                    return (
                        <MoviesCard
                            movie={item}
                            key={key}
                        />)
                })}
            </ul>
        </section>
    )
}

export default MoviesCardList;