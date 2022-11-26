// class Api {
//     constructor(url) {
//         this.url = url;
//         this.headers = {
//             'Content-Type': 'application/json',
//             authorization: this._token
//         }
//     }

//     _checkResponse(res) {
//         if (res.ok) {
//             return res.json();
//         }
//         return Promise.reject(`Ошибка: ${res.status}`);
//     }

//     getMovies() {
//         return fetch('https://api.nomoreparties.co/beatfilm-movies', {
//             method: 'GET',
//             headers: this.headers
//         })
//         .then(this._checkResponse);
//     }
// }

// const api = new Api();
// export default api;