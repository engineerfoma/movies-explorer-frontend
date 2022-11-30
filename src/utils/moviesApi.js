import { MOVIES_URL } from "./constants"

const headers = {
    'Content-Type': 'application/json',
};

const _checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
       else {
        return Promise.reject(new Error(`Ошибка: ${res.status}: ${res.statusText}`)); }
}

export const getMovies = () => {
    return fetch(`${MOVIES_URL}beatfilm-movies`, {
        method: 'GET',
        headers
    })
        .then(res => _checkResponse(res));
};