import React from "react";
import "./home.css";
import Homelayout from "../components/Homelayout";
import '../components/homelayout.css';
import { Divider } from "antd";




const Home=()=>{
    return(
    <div className="home-container">
        <Homelayout>
            <div className="title">
                <h1>Rwanda Booking Tours</h1>
            </div>
            <div className="home-bg">
                <h1>Book Tour with us</h1>
                <p>Tourism in Rwanda is rapidly increasing, 
                    To further place Rwanda on the world map,
                     as a first-class tourism destination. 
                     
                     In Rwanda every sunset is a sunshine!! </p>
            </div>
            <div className="button-form"></div>
        </Homelayout>
  
    </div>)
    }
    
    
export default Home;