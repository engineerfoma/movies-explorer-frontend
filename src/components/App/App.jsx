import './App.scss';
import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import NotFound from '../NotFoundPage/NotFoundPage';
import { getMovies } from '../../utils/moviesApi';

function App() {

  const [loggedIn, setLoggetIn] = useState(true);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (loggedIn) {
      history.push('/movies');
      setIsLoading(true);
      getMovies()
        .then(res => {
          res.json();
          // setMovies(res);
        })
        .catch(err => console.log(`Ошибка: ${err}`))
        .finally(() => {
          setIsLoading(false);
        })
    }
  }, [loggedIn, history])

  return (
    <div className="page">
      <Header
      />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies
            movies={movies}
            isLoading={isLoading} />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="*">
          {NotFound}
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
