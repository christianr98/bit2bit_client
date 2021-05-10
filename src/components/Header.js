import { IconButton, InputBase, Paper } from '@material-ui/core'
import React, { Fragment, useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { UserContext } from './context/UserContext'
import { BtnStyle, BtnStyleSmall } from './styles/CommonStyles'

const StyledHeader = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 3rem;
    background-color: beige;
    display: flex;
    align-items: center;
    z-index: 10;
    //justify-content: space-between;
`
const Logo = styled.div`
    margin-left: 2rem;
    :hover {
        cursor: pointer;
    }
`
const SearchField = styled(Paper)`
    && {
        border-radius: 5px;
        display: flex;
    }
    padding-left: 1rem;
    margin-left: 2rem;
    margin-right: 1rem;
    width: 50%;
    .MuiInputBase-root {
        width: 100%;
    }
`
const Auth = styled.div`
    justify-self: flex-end;
    margin-right: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
`

const Header = () => {
    const {loggedIn, setLoggedIn, user, setUser, search, setSearch} = useContext(UserContext)
    const history = useHistory()
    const handleLogout = () => {
        setLoggedIn(0)
        setUser(null)
        history.push('/')
    }
    const onClickLogin = () => {
        history.push('/login')
    }
    const onClickLogo = () => {
        history.push('/')
    }
    const onClickRegister = () => {
        history.push('./register')
    }
    return (
        <StyledHeader>
            <Logo onClick={onClickLogo}>Bit2Bit Overflow</Logo>
            <SearchField component="form">
                <InputBase
                    placeholder="Buscar"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <IconButton type="submit" 
                aria-label="search">
                    
                </IconButton>
            </SearchField>
            <Auth>
                
                { 
                    JSON.parse(loggedIn) ? 
                    <BtnStyleSmall tipo="filled" onClick={() => handleLogout()}>Log out</BtnStyleSmall>
                    : (
                    <Fragment>     
                        <BtnStyleSmall tipo="filled" onClick={() => onClickLogin()}>Login</BtnStyleSmall>
                        <BtnStyleSmall tipo="filled" onClick={() => onClickRegister()}>Sign up</BtnStyleSmall>
                    </Fragment> 
                    )
                    
                }  
            </Auth>
        </StyledHeader>
    )
}

export default Header
