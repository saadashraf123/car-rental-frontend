import React, { useState, useEffect, createContext, useContext } from 'react'

const Context = createContext();

const StateContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isVerified, setIsVerified] = useState(false)

    return (
        <Context.Provider
            value={{
                user, setUser, isVerified, setIsVerified
            }}>
            {children}
        </Context.Provider>
    )
}

export default StateContext

export const useStateContext = () => useContext(Context);
