import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginContext } from './Logincontext'
import SearchParams from './SearchParams'

const Home = () => {
const {auth,handleLogout} =   useContext(LoginContext)
  const toAbout = useNavigate()
  return (
    <>
    <div>Home</div>
    <button onClick={()=>{toAbout('/about')}}>Navigate To About Page</button>
    <Link to='/about'>NAVIGATE TO ABOUT PAGE USING Link</Link>

    <h1>HOME</h1>
    <h1>{auth ? "User Auth" : "User not auth"}</h1>
     <button onClick={handleLogout}>Logout</button>

     <SearchParams/>
    </>
  )
}

export default Home