const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';

const headers = {
    'Content-Type': 'application/json',
};

const _checkResponse = (res) => {
    res.ok ?
        res.json()
        :
        Promise.reject(new Error(`Ошибка: ${res.status}: ${res.statusText}`));
}

export const getMovies = () => {
    return fetch(`${MOVIES_URL}`, {
        // method: 'GET',
        // headers
    })
        .then(res => _checkResponse(res));
};