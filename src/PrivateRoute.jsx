import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { LoginContext } from "./Logincontext"


function PrivateRoute ({children}){
    const {auth} = useContext(LoginContext)
    if(!auth){
        return <Navigate to={"/userlogin"}/>
    }
  return (
     children
  )
}

export default PrivateRoute