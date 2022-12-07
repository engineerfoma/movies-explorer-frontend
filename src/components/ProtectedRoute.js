import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {
        () => (props.loggedIn || localStorage.getItem('login', true)) ? <Component {...props} /> : <Redirect to="/" />
      }
    </Route>
  )
}

export default ProtectedRoute;