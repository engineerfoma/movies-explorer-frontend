import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreMovies from '../MoreMovies/MoreMovies';

function Movies({ movies, isLoading }) {
    return (
        <main>
            <SearchForm />
            {!isLoading ? <Preloader /> :
            <MoviesCardList 
                movies={movies}
            /> }
            <MoreMovies />
        </main>
    )
}

export default Movies;