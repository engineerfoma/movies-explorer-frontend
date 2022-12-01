import './App.scss';
import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom'
import CurrentUserContext from '../../context/CurrentUserContext'
import ProtectedRoute from '../ProtectedRoute';
import Header from '../Header/Header'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Footer from '../Footer/Footer'
import NotFound from '../NotFoundPage/NotFoundPage'
import useWindowSize from '../../utils/useWindowSize'
import mainApi from '../../utils/MainApi'

function App() {
  const [loggedIn, setLoggetIn] = useState(true);
  const [currentUser, setCurrentUser] = useState('');
  const [savedMovies, setSavedMovies] = useState([]);
  const windowWidth = useWindowSize().width;
  const history = useHistory();

  const handleSaveMovie = (movie) => {
    mainApi
      .addSavedMovie(movie)
      .then((res) => {
        writeSavedMovies();
        setSavedMovies([...savedMovies, ...res])
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }

  const handleRemoveMovie = (movieId) => {
    mainApi
      .removeSavedMovie(movieId)
      .then(() => {
        setSavedMovies((state => state.filter(a => a._id !== movieId)))
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }

  const writeSavedMovies = () => {
    mainApi
      .getSavedMovies()
      .then((res) => {
        setSavedMovies(res.filter((movie) => movie.owner === currentUser?._id))
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }


  useEffect(() => {
    writeSavedMovies();
  }, [loggedIn])

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          loggedIn={loggedIn}
        />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <ProtectedRoute
            exact
            path="/movies"
            component={Movies}
            windowWidth={windowWidth}
            savedMovie={savedMovies}
            handleSaveMovie={handleSaveMovie}
            handleRemoveMovie={handleRemoveMovie}
          />
          <ProtectedRoute
            exact
            path="/saved-movies"
            component={SavedMovies}
            windowWidth={windowWidth}
            savedMovie={savedMovies}
            handleRemoveMovie={handleRemoveMovie}
          />
          <ProtectedRoute
            exact
            path="/profile"
            component={Profile}
          />
          <Route path="/signup">
            {loggedIn ?
              <Redirect to="/movies" />
              :
              <Register />
            }
          </Route>

          <Route path="/signin">
            {loggedIn ?
              <Redirect to="movies" />
              :
              <Login />
            }
          </Route>
          <Route>
            {loggedIn ? (
              <Redirect to="/" />
            ) : (
              <Redirect to="/signin" />
            )}
          </Route>
          <Route path="*">
            {NotFound}
          </Route>
        </Switch>
        <Footer />
      </CurrentUserContext.Provider>
    </div >
  );
}

export default App;
