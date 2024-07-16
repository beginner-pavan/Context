import React, { useContext } from 'react'
import { Authcontext } from '../AuthContextProvider'



const Dashboard = () => {
    const {Auth,handleAuth}=useContext(Authcontext)
   
    
  return (
    <>
    <button onClick={handleAuth}>{Auth === true ? "logout":"Login"}</button>
    
    </>
  )
}

export default Dashboard