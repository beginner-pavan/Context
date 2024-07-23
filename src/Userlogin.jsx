import React, { useContext } from 'react'
import { LoginContext } from './Logincontext'
import { Navigate } from 'react-router-dom'


const Userlogin = () => {
    const  {auth,handleLogin,handleLogout} = useContext(LoginContext)
    if(auth){
      return(
        <Navigate to='/'/>
      )
    }
  return (
    <div>
        
        <h2>Please Login</h2>
        <button onClick={handleLogin}>Login</button>

    </div>
  )
}

export default Userlogin