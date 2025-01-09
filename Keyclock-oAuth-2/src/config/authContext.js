import { createContext, useContext, useState } from "react";

//creating auth context
const AuthContext=createContext();


export const AuthProvider=({chlidren})=>{

    const [isAuthenticated,setIsAuthenticated]=useState(false)
    return <AuthContext.Provider 
    value={{
        isAuthenticated:isAuthenticated,
    }}>

        {chlidren}
    </AuthContext.Provider>
 
};
 export const useAuth = () => useContext(AuthContext)
