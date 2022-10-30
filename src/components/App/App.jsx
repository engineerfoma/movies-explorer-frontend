import './App.scss';
import { currentUserContext } from '../../context/CurrentUserContext';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import ProtectedRoute from '../ProtectedRoute';
import Login from '../Login/Login';
import Register from '../Register/Register';


function App() {
  return (
    <currentUserContext.Provider>
      <div className="page">
        <Header
        />
        <Switch>
          <ProtectedRoute
            exact
            path="/"
          />
          <Route path="/signin">
            <Login
              onLogin={onLogin}
            />
          </Route>
          <Route path="/signup">
            <Register
            />
          </Route>
          <Route>
            {loggedIn ? (
              <Redirect to="/" />
            ) : (
              <Redirect to="/signin" />
            )}
          </Route>

        </Switch>
        <Footer />
      </div>
    </currentUserContext.Provider >
  );
}

export default App;
