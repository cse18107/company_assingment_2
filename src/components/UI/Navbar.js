import React from "react";
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div
      style={{
        width: "100%",
        height: "80px",
        backgroundColor: "rgb(2, 2, 42)",
        color:"white",
        display:"flex",
        alignItems:"center",
        
        fontSize:"3rem"
      }}
    >
      <Link to={'/'}
      style={{
        textDecoration:"none",
        color:"white",
        marginLeft:"40px",
        fontFamily: "'Balsamiq Sans', cursive",
      }}>Book Show</Link>
    </div>
  );
}

export default Navbar;
