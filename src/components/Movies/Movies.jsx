import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
    return (
        <main>
            <SearchForm />
            {/* <Preloader /> */}
            <MoviesCardList />
        </main>
    )
}

export default Movies;