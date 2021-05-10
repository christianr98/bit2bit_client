import {createContext, useState} from 'react'

export const UserContext = createContext({
    loggedIn: 0,
    setLoggedIn: () => {},
    user: null,
    setUser: () => {},
    userID: null,
    setUserID: () => {},
    search: "",
    setSearch: () => {}
})
