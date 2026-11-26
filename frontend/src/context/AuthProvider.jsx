/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../services/BaseUrl";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [authUser,setAuthUser] = useState(null)

    const token = localStorage.getItem('lm_token')

    const fetchUser = async()=>{
        const userResponse = await fetch(`${baseUrl}/user`,{
        headers:{
            Authorization: `Bearer ${token}`
            }
        })
    
        const userData = await userResponse.json()
        setAuthUser(userData)
    }

    useEffect(()=>{
        if(!token){
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setAuthUser(null);
            return
        }

        fetchUser()
        
    },[token])

    const logout = ()=>{
        localStorage.removeItem('lm_token')
        setAuthUser(null)
    }

    return (
        <AuthContext.Provider value={{authUser,setAuthUser,logout,token}}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;