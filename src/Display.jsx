import React, { useContext } from 'react'
import { Authcontext } from './AuthContextProvider'
import Login from './Login'
import Dashboard from './Components/Dashboard'


const Display = () => {
    const {Auth,handleAuth}=useContext(Authcontext)

  return (
    <div>
        {
            Auth === false?
           <>
            <Login/>
           </>
           :
           <Dashboard/>
        }
    </div>
  )
}

export default Display