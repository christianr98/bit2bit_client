import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router';
import { UserContext } from '../components/context/UserContext';

const AuthRoute = props => {
    const { type } = props;
    const {loggedIn} = useContext(UserContext)
    if (type === "guest" && JSON.parse(loggedIn)) return <Redirect to="/" />;
    else if (type === "private" && !JSON.parse(loggedIn)) return <Redirect to="/login" />;
  
    return <Route {...props} />;
  };

export default AuthRoute
