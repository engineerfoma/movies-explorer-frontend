import './App.scss';
import { currentUserContext } from '../../context/CurrentUserContext';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
// import ProtectedRoute from '../ProtectedRoute';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
// import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';


function App() {
  return (
    <currentUserContext.Provider>
      <div className="page">
        <Header
        />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/movies">
            <Movies />
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
          {/* <Route path="/profile">
            <Profile />
          </Route> */}
        </Switch>
        <Footer />
      </div>
    </currentUserContext.Provider >
  );
}

export default App;
