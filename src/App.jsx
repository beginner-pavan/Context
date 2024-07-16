import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Login from "./Login";
import Display from "./Display";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Links from "./Links";
import Users from "./Users";
import UserDetail from "./Userdetail";
let linkObject = [
  {
    link:'/',
    text:"Home"
  },
  {
    link:'/about',
    text:"about",
  },
  {
    link:"/services",
    text:"services"
  },
  {
    link:'/users',
    text:"Users"
  }
]
const defaultStyle = {
  color:"orange",
  textDecoration :"underline"
}
const activeStyle = {
  color:"yellow",
  textDecoration:"none"
}
function App() {


  return (
    <>
      <div style={{display:"flex",gap:"20px"}}>
      {
        linkObject.map((link)=>{
          return(

            <NavLink to={link.link} key={link.link} style={({isActive})=>{
           return    isActive ? defaultStyle : activeStyle
              

            }}>{link.text}</NavLink>
          )
        })
      }
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/:id" element={<UserDetail/>}/>
       
      </Routes>
    </>
  );
}

export default App;
