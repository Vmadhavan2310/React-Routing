import React from 'react';
import { Link,NavLink } from 'react-router-dom';

function Navbar() {
  const styleNav=({isActive}:any)=>{
    return{
      textDecoration:isActive?"underline":"none",
      fontWeight:isActive?"bold":"normal"
    }
  }
  return (
  
    <nav>

    <NavLink to="/" style={styleNav}>Home</NavLink>
    <NavLink to="/about" style={styleNav}>About</NavLink>
    <NavLink to="/contact" style={styleNav}>Contact</NavLink>
    <NavLink to="/customer" style={styleNav}>Customer</NavLink>
    <NavLink to="collections">Collection page</NavLink>
    </nav>

  )
}

export default Navbar