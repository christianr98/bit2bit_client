import './App.css';
import { StylesProvider } from '@material-ui/styles';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Home from './components/Home';
import Router from './routers/Router';
import { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router';
import Login from './components/Login';
import Register from './components/Register';
import Question from './components/Question';
import { BrowserRouter } from 'react-router-dom';
import {UserContext, UserProvider} from './components/context/UserContext';
import useLocalStorage from './components/hooks/useLocalStorage';
import NewQuestion from './components/NewQuestion';
function App() {

  const theme = {
    colorPrimary: "#f48024",
    darkRedSecondary: "#662323",
    softGray: "#BDBDBD",
    gray: "#828282",
    lightRed: "#FF7676",
  };

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn'))
  const [user, setUser] = useState(localStorage.getItem('user'))
  const [userID, setUserID] = useState(localStorage.getItem('userID'))
  const [search, setSearch] = useState("")

  const value = {loggedIn, setLoggedIn, user, setUser, userID, setUserID, search, setSearch}
  const history = useHistory();

  useEffect(() => {
    localStorage.setItem('loggedIn', loggedIn);
  }, [loggedIn]);

  useEffect(() => {
    localStorage.setItem('user', user);
  }, [user]);

  useEffect(() => {
    localStorage.setItem('userID', userID);
  }, [userID]);


  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>    
        <UserContext.Provider value={value}>
          <Router/>
        </UserContext.Provider>
      </ThemeProvider>
    </StylesProvider>  
  );
}

export default App;
