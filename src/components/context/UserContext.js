import {createContext, useState} from 'react'

export const UserContext = createContext({
    loggedIn: false,
    setLoggedIn: () => {},
    user: null,
    setUser: () => {},
    userID: null,
    setUserID: () => {},
    search: "",
    setSearch: () => {}
})
