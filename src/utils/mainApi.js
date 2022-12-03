import { MOVIES_URL, LOCAL_API } from "./constants";

class Api {
    constructor(url) {
        this.url = url;
        this.headers = {
            'Content-Type': 'application/json'
        }
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            credentials: 'include',
            method: 'GET',
            headers: this._headers
        })
            .then(this._checkResponse);
    }

    setUserInfo({ name, email }) {
        
        return fetch(`${this._url}/users/me`, {
            credentials: 'include',
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({ name, email })
        })
            .then(this._checkResponse);
    }

    addSavedMovie(movie) {
        const body = {
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: `${MOVIES_URL}${movie.image.url}`,
            trailerLink: movie.trailerLink,
            thumbnail: `${MOVIES_URL}${movie.image.formats.thumbnail.url}`,
            movieId: movie.id,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
        }
        return fetch(`${this.url}/movies`, {
            method: 'POST',
            headers: this.headers,
            credentials: 'include',
            body: JSON.stringify(body)
        })
            .then(this._checkResponse);
    }

    removeSavedMovie(id) {
        return fetch(`${this.url}/movies/${id}`, {
            method: 'DELETE',
            headers: this.headers,
            credentials: 'include'
        })
            .then(this._checkResponse);
    }

    getSavedMovies() {
        return fetch(`${this.url}/movies`, {
            method: 'GET',
            headers: this.headers,
            credentials: 'include'
        })
            .then(this._checkResponse);
    }
}

const MainApi = new Api(LOCAL_API);
export default MainApi;