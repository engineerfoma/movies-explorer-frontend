import './MoviesCardList.scss';
import Movie from '../MoviesCard/MoviesCard';


function MoviesCard({ filteredMovies }) {


    return (
        <section className="gallery">
            
                <ul className="gallery__list">
                    {filteredMovies.map((item) => {
                        return (
                            <Movie
                                movie={item}
                                key={item.id}
                                remove={false}
                            />)
                    })}
                </ul>
           
        </section>
    )
}

export default MoviesCard;