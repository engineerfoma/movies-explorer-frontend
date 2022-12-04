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
import mainApi from '../../utils/MainApi'
import * as Auth from '../../utils/Auth'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [savedMovies, setSavedMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const windowWidth = useWindowSize().width;
  const history = useHistory();

  const handleSaveMovie = (movie) => {
    mainApi
      .addSavedMovie(movie)
      .then((res) => {
        // writeSavedMovies();
        setSavedMovies([...savedMovies, ...res])
      })
      .catch((err) => console.log(`Ошибка: ${err.message}`));
  }

  const handleRemoveMovie = (movieId) => {
    mainApi
      .removeSavedMovie(movieId)
      .then(() => {
        setSavedMovies((state => state.filter(a => a._id !== movieId)))
      })
      .catch((err) => console.log(`Ошибка: ${err.message}`));
  }

  const onLogin = (data) => {
    return Auth
      .authorize(data)
      .then(() => {
        setLoggedIn(true);
        history.push('/movies');
        localStorage.setItem('loggedIn', true);
      })
      .catch((err) => console.log(`Ошибка: ${err.message}`))
  }

  const onRegister = (data) => {
    return Auth
      .register(data)
      .then(() => {
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch(err => {
        return `${err}: ${err.message}`;
      })
  }

  const onLogout = () => {
    return Auth
      .signOut()
      .then(() => {
        setLoggedIn(false);
        history.push("/signin");
        localStorage.clear();
      })
      .catch(err => console.log(`Ошибка: ${err.message}`));
  }

  const updateUserData = ({ name, email }) => {
    return { name, email };
  }


  // useEffect(() => {
  //   history.push("/");
  //   writeSavedMovies();
  //   mainApi
  //     .getUserInfo()
  //     .then(res => {
  //       setLoggedIn(true);
  //       setCurrentUser(res);
  //     })
  //     .catch(err => {
  //       console.log(`Ошибка: ${err}`);
  //       setCurrentUser(null);
  //       localStorage.clear();
  //       setLoggedIn(false);
  //     })
  // }, [loggedIn, history])

  // history.push("/");
  // writeSavedMovies();
  // mainApi
  //   .getUserInfo()
  //   .then(res => {
  //     setLoggedIn(true);
  //     setCurrentUser(res);
  //   })
  //   .catch(err => {
  //     console.log(`Ошибка: ${err}`);
  //     setCurrentUser(null);
  //     localStorage.clear();
  //     setLoggedIn(false);
  //   })

  //     useEffect(() => {
  //       if (localStorage.getItem('loggedIn', true)) {
  //         setLoggedIn(true);
  //       }
  // }, [])

  // const writeSavedMovies = () => {
  //   mainApi
  //     .getSavedMovies()
  //     .then((res) => {
  //       setSavedMovies(res.filter((movie) => movie.owner === currentUser?._id))
  //     })
  //     .catch((err) => console.log(`Ошибка: ${err.message}`));
  // }

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getSavedMovies()
        .then(res => {
          localStorage.setItem('savedMovies', JSON.stringify(res));
          setSavedMovies(res);
        })
        .catch(err => console.log(`${err}: ${err.message}`));
    };
  }, [loggedIn, currentUser]);


  useEffect(() => {
    if (localStorage.getItem('loggedIn', true)) {
      setLoggedIn(true);
    }
    if (loggedIn) {
      // writeSavedMovies();
      mainApi
        .getUserInfo()
        .then(res => {
          setLoggedIn(true);
          setCurrentUser(res);
        })
        .catch(err => {
          setCurrentUser(null);
          localStorage.clear();
          setLoggedIn(false);
        });
    }
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
            loggedIn={loggedIn}
            path="/movies"
            component={Movies}
            windowWidth={windowWidth}
            savedMovie={savedMovies}
            handleSaveMovie={handleSaveMovie}
            handleRemoveMovie={handleRemoveMovie}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />

          <ProtectedRoute
            loggedIn={loggedIn}
            path="/saved-movies"
            component={SavedMovies}
            windowWidth={windowWidth}
            savedMovie={savedMovies}
            handleRemoveMovie={handleRemoveMovie}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />

          <ProtectedRoute
            loggedIn={loggedIn}
            path="/profile"
            component={Profile}
            onLogout={onLogout}
            onUpdateUserData={updateUserData}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
          <Route path="/signup">
            {loggedIn ?
              <Redirect to="/movies" />
              :
              <Register
                onRegister={onRegister}
                errorMessage={errorMessage}
              />
            }
          </Route>

          <Route path="/signin">
            {loggedIn ?
              <Redirect to="/movies" />
              :
              <Login
                onLogin={onLogin}
                errorMessage={errorMessage}
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
