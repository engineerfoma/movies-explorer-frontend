import './MoviesCardList.scss';
import Movie from '../MoviesCard/MoviesCard';
// import movies from '../../utils/constants';

function MoviesCard({ movies }) {

    
    return (
        <section className="gallery">
            <ul className="gallery__list">
                {movies.map((item) => {
                    return (
                        <Movie
                            movie={item}
                            key={item._id}
                        />)
                })}
            </ul>
        </section>
    )
}

export default MoviesCard;