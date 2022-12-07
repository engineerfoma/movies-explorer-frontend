import './App.scss';
import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom'
import { CurrentUserContext } from '../../context/CurrentUserContext'
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
import MainApi from '../../utils/MainApi'
import * as Auth from '../../utils/Auth'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [savedMovies, setSavedMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const windowWidth = useWindowSize().width;
  const history = useHistory();


  const [stateMessage, setStateMessage] = useState(false);

  const handleSaveMovie = (movie) => {
    return MainApi
      .addSavedMovie(movie)
      .then((res) => {
        setSavedMovies([...savedMovies, res])
      })
      .catch((err) => console.log(`Ошибка: ${err.message}`))
  }

  const getMovieIdOnSavedMovies = (id, arr) => {
    return arr.find((item) => item.movieId === id)._id;
  }

  const handleRemoveMovie = (movieId) => {
    const id = getMovieIdOnSavedMovies(movieId, savedMovies);
    return MainApi
      .removeSavedMovie(id)
      .then(() => {
        const moviesList = savedMovies.filter(m => m._id !== id);
        setSavedMovies(moviesList);
      })
      .catch((err) => console.log(`Ошибка: ${err.message}`))
  }

  const handleRemoveSaveMovie = (movieId) => {
    return MainApi
      .removeSavedMovie(movieId)
      .then(() => {
        const moviesList = savedMovies.filter(m => m._id !== movieId);
        setSavedMovies(moviesList);
      })
      .catch((err) => console.log(`Ошибка: ${err.message}`))
  }

  const onLogin = (data) => {
    return Auth
      .authorize(data)
      .then(() => {
        setLoggedIn(true);
        localStorage.setItem('login', true);
        history.push('/movies');
      })
      .catch((err) => {
        localStorage.setItem('login', false);
        console.log(`Ошибка: ${err.message}`)
      })
  }

  const onRegister = (data) => {
    return Auth
      .register(data)
      .then(() => {
        onLogin(data);
        setLoggedIn(true);
        localStorage.setItem('login', true);
        history.push('/movies');
      })
      .catch(err => {
        if (err === "Такой email уже существует") {
          console.log(`Ошибка: ${err.message}`)
        }
        console.log(`Ошибка: ${err.message}`);
        localStorage.setItem('login', false);
      })
  }

  const onLogout = () => {
    return Auth
      .signOut()
      .then(() => {
        localStorage.setItem('login', false);
        setLoggedIn(false);
        localStorage.clear();
        history.push("/");
      })
      .catch(err => console.log(`Ошибка: ${err.message}`));
  }

  const updateUserData = (userData) => {
    setLoading(true);
    setStateMessage(true);
    Promise.all([MainApi.setUserInfo(userData), MainApi.getUserInfo()])
      .then(([data, res]) => {
        setCurrentUser(data);
        setCurrentUser(res);
      })
      .catch(err => {
        setStateMessage(false);
        console.log(`Ошибка: ${err.message}`)
      })
      .finally(() => {
        setLoading(false);
        setStateMessage(false);
      })
  };

  useEffect(() => {
    if (localStorage.getItem('login', true)) {
      setLoggedIn(true);
    }
    MainApi
    .getUserInfo()
    .then((res) => {
      setCurrentUser(res);
    })
    .catch(err => console.log(`Ошибка: ${err.message}`));
    setStateMessage(true);
  }, [])

  useEffect(() => {
    
    if (loggedIn) {
      MainApi
        .getUserInfo()
        .then(res => {
          setCurrentUser(res);
        })
        .catch(err => {
          localStorage.clear();
        });
      MainApi
        .getSavedMovies()
        .then((res) => {
          setSavedMovies(res);
        })
        .catch(err => console.log(`Ошибка: ${err.message}`));
    }
  }, [loggedIn]);

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
            loggedIn={loggedIn}
            path="/movies"
            component={Movies}
            windowWidth={windowWidth}
            savedMovies={savedMovies}
            handleSaveMovie={handleSaveMovie}
            handleRemoveMovie={handleRemoveMovie}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
          <ProtectedRoute
            loggedIn={loggedIn}
            path="/saved-movies"
            component={SavedMovies}
            setSavedMovies={setSavedMovies}
            films={savedMovies}
            savedMovies={savedMovies}
            handleRemoveMovie={handleRemoveSaveMovie}
            errorMessage={errorMessage}
          />
          <ProtectedRoute
            loggedIn={loggedIn}
            path="/profile"
            component={Profile}
            onLogout={onLogout}
            onUpdateUserData={updateUserData}
            loading={loading}
            stateMessage={stateMessage}
          />
          <Route path="/signup">
            {loggedIn ?
              <Redirect to="/movies" />
              :
              <Register
                onRegister={onRegister}
              />
            }
          </Route>

          <Route path="/signin">
            {loggedIn ?
              <Redirect to="/movies" />
              :
              <Login
                onLogin={onLogin}
              />
            }
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </CurrentUserContext.Provider>
    </div >
  );
}

export default App;