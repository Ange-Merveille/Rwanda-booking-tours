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
          
            <div  className="button-form">

         <button style={{marginLeft:"25%",width:"50%",borderRadius:"20px"}} className="button"htmlType="submit"> <a href="/tours">Booking Now</a></button>
         </div>
         </div>
        </Homelayout>
  
    </div>)
    }
    
    
export default Home;