import React , { createContext, useState } from "react";

export const LoginContext = createContext();
 const Logincontextprovider = ({children})=>{
    const[auth,setauth] = useState(true)

const handleLogin = ()=>{
    setauth(true)

}
const handleLogout = ()=>{
    setauth(false)
}
    return (
        <LoginContext.Provider value={{setauth,handleLogin,handleLogout,auth}}>
            {children}
        </LoginContext.Provider>
    )

 }
 
 export default Logincontextprovider