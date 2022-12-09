import './MoviesCardList.scss'
import Movie from '../MoviesCard/MoviesCard'
import MoreMovies from '../MoreMovies/MoreMovies'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
    Desktop_Movies,
    Table_Movies, Phone_Movies,
    Desktop_width,
    Table_width,
    More_films_desc,
    More_films_tab
} from '../../utils/constants'

function MoviesCard({
    filteredMovies,
    windowWidth,
    handleSaveMovie,
    handleRemoveMovie,
    savedMovies,
}) {
    const history = useHistory();
    const [displayMovies, setDisplayMovies] = useState(filteredMovies);
    const [numberOfFilms, setNumberOfFilms] = useState({
        quantityMovies: Desktop_Movies,
        moreMovies: More_films_desc,
    });

    const handleClick = () => {
        if ((filteredMovies.length - displayMovies.length) > 0) {
            const MoreMovies = filteredMovies.slice(
                displayMovies.length,
                displayMovies.length + numberOfFilms.moreMovies,
            );
            setDisplayMovies([...displayMovies, ...MoreMovies]);
        };
    };

    useEffect(() => {
        if (windowWidth > Desktop_width) {
            setNumberOfFilms({
                quantityMovies: Desktop_Movies,
                moreMovies: More_films_desc
            })
        } else if ((windowWidth >= Table_width) && (windowWidth <= Desktop_width)) {
            setNumberOfFilms({
                quantityMovies: Table_Movies,
                moreMovies: More_films_tab
            })
        } else if (windowWidth < Table_width) {
            setNumberOfFilms({
                quantityMovies: Phone_Movies,
                moreMovies: More_films_tab
            })
        }
    }, [windowWidth, setNumberOfFilms.quantityMovies]);

    useEffect(() => {
        if (filteredMovies) {
            const catalog = filteredMovies.filter(
                (el, index) => numberOfFilms.quantityMovies > index);
            setDisplayMovies(catalog);
        };
    }, [filteredMovies, numberOfFilms.quantityMovies]);

    return (
        <>
            <section className="gallery">
                <ul className="gallery__list">
                    {
                        displayMovies.map((item) => {
                            return (
                                <Movie
                                    movie={item}
                                    key={item._id || item.id}
                                    handleSaveMovie={handleSaveMovie}
                                    handleRemoveMovie={handleRemoveMovie}
                                    savedMovies={savedMovies}
                                />)
                        })
                    }
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