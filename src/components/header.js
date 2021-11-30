import { Divider } from "antd";
import React from "react";
import "./header.css"
import img from "../assets/img10.jpg";

const Header=()=>

{ 
    return(
        <div className="header">
      
        <div class="logo">
            <img src={img}/>
        </div>
        <div className="navbar-right">
        <a href="home">Home</a>
        <a href="about">About us</a>

        <a href="garelly">Garelly</a>
        <a href="tours">Tours</a>


        <a href="contactus">Contact us</a>
        <a href="login">Log in</a>
         <a href="newtour">New Tours </a>
<a href="signin">Sign in</a>


       
        
        

        </div>
        </div>
    )
}
export default Header