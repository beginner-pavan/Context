import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from './Nav.module.css'
import { LoginContext } from "./Logincontext";

const Navbar = () => {
// const{auth,handleLogin,handleLogout}=useContext(LoginContext)
const {auth,handleLogout} = useContext(LoginContext)
 
  const pages = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/About",
      text: "About",
    },
    {
      path: "/Services",
      text: "Services",
    },
    {
      path: "/Users",
      text: "Users",
    },
  ];
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "50px",
      }}
    >
      {pages.map((page, index) => {
        return (
          <NavLink key={index} to={page.path} className={({ isActive }) => {
            return(

              isActive ? styles.active : styles.default
            )

          }}>
            {page.text}
          </NavLink>
        );
      })}

      <p>Login Status {auth ? "Logged in": "Please Login"}</p>
     {auth && <button onClick={handleLogout}>Logout</button>}
    </div>

  );
};

export default Navbar;
