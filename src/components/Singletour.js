import React from "react";
const Singletour=({tour})=>{
    return(
        <div className="Singletour-container">
    <h1>{tour.title}</h1>
    <div className="images">
    <img src={tour.images[0] } width="70%"/></div>
    <div className="tour-description">
    <p>{tour.moreinfo}</p><br/>
    <h1>Date:{tour.dateScheduled}</h1><br/>
                 <h1>Available seats:{tour.seats}</h1>
                 <h1>phone:{tour.phone}</h1>
                 <h1>Due date:{tour.dueDate}</h1>


    </div>
    <h1>GALLERY</h1>
    <div className="gallery">
        
{
    tour.images.map((image)=>(
        <img src={image}></img>
    ))
}
        

    </div>
    </div>
    )
}
export default Singletour;