import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreMovies from '../MoreMovies/MoreMovies';

function Movies() {
    return (
        <main>
            <SearchForm />
            {/* <Preloader /> */}
            <MoviesCardList />
            <MoreMovies />
        </main>
    )
}

export default Movies;