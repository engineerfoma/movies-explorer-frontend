import './MoreMovies.scss'

function Movies({ handleClick }) {
    return (
        <article className="more">
            <button className="more__button" onClick={handleClick}>Ещё</button>
        </article>
    )
}

export default Movies;