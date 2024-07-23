import React from 'react'
import { Link } from 'react-router-dom'
 
const Links = () => {
  return (
    <div>
        <div style={{display:"flex",gap:"20px"}}>
      <Link to="/">Home</Link>
      <Link to="/about">about</Link>
      <Link to="/services">Services</Link>
    
       
      </div>
    </div>
  )
}

export default Links