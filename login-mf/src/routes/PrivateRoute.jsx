import { Route } from "react-router-dom";
import { useAuth } from '../auth/AuthContext';

export const PrivateRoute = ({component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> :
        <Redirect to="/" /> 
      }
    />
  );
}; 
