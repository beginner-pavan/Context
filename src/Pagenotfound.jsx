import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
 
const Pagenotfound = () => {
  return (
    <div>
        <h1>404 NOT FOUND</h1>
        <h3>U came to wrong place go back to <Link to={'/'}>Home</Link>  </h3>
        <img className='notfoundImg' src="../src/images/404.png" alt="" />
    </div>
  )
}

export default Pagenotfound