import React from "react";
import Homelayout from "../components/Homelayout";
import TourCard from"../components/TourCard";
import alltoursData from"../assets/constants/tours.json";


const Tours = () => {
   
   return(
       <>
       
   <Homelayout>
       <div className="background">
           <div className="TourCard-container">
{
    alltoursData.map((data)=>(  <TourCard data={data}/>))

}

           </div>
       </div>



   </Homelayout></>
    );
};
export default Tours;
