import React, { useContext } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { UserContext } from '../components/context/UserContext';
import Header from '../components/Header';
import Home from '../components/Home';
import Layout from '../components/layouts/Layout';
import Login from '../components/Login';
import NewQuestion from '../components/NewQuestion';
import Question from '../components/Question';
import Register from '../components/Register';
import AuthRoute from './AuthRoute';

const Router = () => {
  const {loggedIn} = useContext(UserContext)
    return (
      <React.Fragment>
      {
        <BrowserRouter>
          <Header/>
          <Switch>
            <AuthRoute path="/login" type="guest" >
              <Login/>
              </AuthRoute>
            <AuthRoute path="/register" type="guest" >
              <Register/>
            </AuthRoute>
            <AuthRoute path="/newQuestion" type="private" >
              <NewQuestion/>
            </AuthRoute>  
            <Route path="/:idQuestion" component={Question} />          
            <Route exact path="/" component={Home} />
            
            
          </Switch>
        </BrowserRouter> 
      }
    </React.Fragment>

      
    );
  };

export default Router
