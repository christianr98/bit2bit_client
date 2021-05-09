import React, {useContext, useState} from 'react'
import axios from 'axios'
import { Redirect , useHistory} from 'react-router-dom';
import { AuthBox, BtnStyle, StyledContainer, StyledText, Title, ErrMsg } from './styles/CommonStyles';
import { UserContext } from './context/UserContext';
import styled from 'styled-components';



const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const {loggedIn, setLoggedIn, user, setUser, userID, setUserID} = useContext(UserContext)
    console.log("Register")
    const history = useHistory();

    const validate = () => {
        
    }
    const validEmail = (email) => {
        return email.match(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
      };
    
    const onClick = () => {
        const dataSubmit = {
            email: email,
            password: password,
            name: name,
        }
        if ( !validEmail(email) ) {
            setError('Ingrese un correo válido')
            return
        }
        axios.post(`${process.env.REACT_APP_API_URL}/api/user/register`, 
        dataSubmit)
        .then(res => history.push('./login'))
        .catch(error => {
            console.log("error:",error.response)
            setError(error.response.data.message)
        })
    }
    
    return (          
        <StyledContainer>                
            <AuthBox>
                <Title>Register</Title>
                <div className='item'>
                    <StyledText color="dark">Nombre</StyledText>
                    <input className='input-name' 
                            type='text' value={name} 
                            onChange={(e)=>setName(e.target.value)}>
                    </input>
                </div>
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
                            type='password' value={password} 
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


export default Register
