import React, {useContext, useState} from 'react'
import axios from 'axios'
import { Redirect , useHistory} from 'react-router-dom';
import { AuthBox, BtnStyle, ErrMsg, StyledContainer, StyledText, Title } from './styles/CommonStyles';
import { UserContext } from './context/UserContext';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {loggedIn, setLoggedIn, user, setUser, userID, setUserID} = useContext(UserContext)
    console.log("Login")
    const history = useHistory();

    const handleLogin = (data) => {
        console.log('handle login : ',data)
        setLoggedIn(true)
        setUser(data.token)
        setUserID(data.id)
        //console.log("login data: ",data)
        return true
      }

      const validEmail = (email) => {
        return email.match(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
      };
    
    const onClick = () => {
        const dataSubmit = {
            email: email,
            password: password
        }
        if ( !validEmail(email) ) setError('Ingrese un correo válido')
        axios.post(`${process.env.REACT_APP_API_URL}/api/user/login`, dataSubmit)
        .then(async res => {
            console.log(handleLogin)
            return await handleLogin(res.data)
        })
        .then(auth => {console.log("auth:",auth); history.push('./')})
        .catch(error => {
            console.log("error:",error.response)
            setError(error.response.data.message)
        })  
    }
    
    return (          
        <StyledContainer>                
            <AuthBox>
                <Title>Login</Title>
                <div className='item'>
                    <StyledText color="dark">Email</StyledText>
                    <input className='input-email' 
                            type='text' value={email} 
                            onChange={(e)=>setEmail(e.target.value)}>
                    </input>
                </div>
                <div className='item'>
                    <StyledText color="dark">Password</StyledText>
                    <input className='input-password' 
                            type='password'  value={password} 
                            onChange={(e)=>setPassword(e.target.value)}>
                    </input>
                </div>
                <div className='item-submit'>
                    <ErrMsg>{error}</ErrMsg>
                    <BtnStyle tipo="filled" className='btn-login' onClick={() => onClick()}>REGISTER</BtnStyle>
                </div>
            </AuthBox>
        </StyledContainer>
    )
}

export default Login
