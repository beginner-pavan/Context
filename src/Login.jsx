import React, { useContext, useState } from 'react'
import { Authcontext } from './AuthContextProvider'


const Login = () => {
    const {Auth,handleAuth}=useContext(Authcontext)
   const[mail,setmail]=useState('')
   const [password,setpassword]=useState('')
   const handlesubmit = (e)=>{
    e.preventDefault()
    console.log(mail);
    console.log(password);
    handleAuth()
  
   

   }
   console.log(Auth);

    
  return (
    <>

    <form action="" onSubmit={handlesubmit}>
        <input type="email" name="" id="" onChange={(event)=>setmail(event.target.value)} placeholder='email'/>
        <input type="password" name="" id="" onChange={(event)=>{setpassword(event.target.value)}} placeholder='password'/>
        <input type="submit" name="" id="" />
    </form>
    </>
  )
}

export default Login