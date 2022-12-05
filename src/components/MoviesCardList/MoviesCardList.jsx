import './MoviesCardList.scss'
import Movie from '../MoviesCard/MoviesCard'
import MoreMovies from '../MoreMovies/MoreMovies'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

function MoviesCard({
    filteredMovies,
    windowWidth,
    handleSaveMovie,
    handleRemoveMovie,
    savedMovies,
    setSavedMovies,
    savePage
}) {

    const history = useHistory();
    const [displayMovies, setDisplayMovies] = useState(filteredMovies);
    
    const [numberOfFilms, setNumberOfFilms] = useState({
        quantityMovies: 12,
        moreMovies: 3,
    });

    const handleClick = () => {
        if ((filteredMovies.length - displayMovies.length) > 0) {
            const MoreMovies = filteredMovies.slice(
                displayMovies.length,
                displayMovies.length + numberOfFilms.moreMovies,
            );
            setDisplayMovies([ displayMovies, ...MoreMovies ]);
        };
    };

    useEffect(() => {
        if (windowWidth > 1279) {
            setNumberOfFilms({
                quantityMovies: 12,
                moreMovies: 3
            })
        } else if ((windowWidth >= 481) && (windowWidth <= 1279)) {
            setNumberOfFilms({
                quantityMovies: 8,
                moreMovies: 2
            })
        } else if (windowWidth < 481) {
            setNumberOfFilms({
                quantityMovies: 5,
                moreMovies: 2
            })
        }

    }, [numberOfFilms.quantityMovies, windowWidth]);

    useEffect(() => {
        if (filteredMovies) {
            const catalog = filteredMovies.filter(
                (el, index) => numberOfFilms.quantityMovies > index);
            setDisplayMovies(catalog);
        };
    }, [filteredMovies, numberOfFilms.quantityMovies, savedMovies]);

    return (
        <>
            <section className="gallery">
                <ul className="gallery__list">
                    {/* {history.location.pathname === "/movies" && ( */}
                       {
                        filteredMovies.map((item) => {
                            return (
                                <Movie
                                    movie={item}
                                    key={savePage ? item._id : item.id}
                                    handleSaveMovie={handleSaveMovie}
                                    handleRemoveMovie={handleRemoveMovie}
                                    savedMovies={savedMovies}
                                    savePage={savePage}
                                />)
                        })
                    }
                    {/* ) */}
                    {/* } */}
                    {/* {history.location.pathname === "/saved-movies" && (
                        filteredMovies.map((item) => {
                            return (
                                <Movie
                                    movie={item}
                                    key={item.id}
                                    handleRemoveMovie={handleRemoveMovie}
                                    savedMovies={savedMovies}
                                    savePage={true}
                                />)
                        })

                    )} */}
                </ul>
            </section>
            {history.location.pathname === "/movies" && (
                !((displayMovies.length === filteredMovies.length) || (displayMovies.length === 0))
                &&
                <MoreMovies handleClick={handleClick} />
            )}
        </>
    )
}

export default MoviesCard;