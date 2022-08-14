import React, {createContext, useState} from 'react'

export const AuthContext = createContext({})

function AuthProvider({children}){
    return(
        <AuthContext.Provider value={{media:[5,10,50,15,35,25,15]}}>
            {children}
        </AuthContext.Provider>
    )
} 

export default AuthProvider;