import React, { useState } from "react";
import Picture from "../assets/images/animal-zebra.jpg";
import "antd/dist/antd.css";
import { Drawer } from "antd";
import Singletour from "./Singletour";

const TourCard = ({ data }) => {
    const [drawerVisible, setDrawerVisible] = useState(false);
    const handleClickDrawerVisible = () => {
        setDrawerVisible(true);
    }
    const closeDrawerVisible = () => {
        setDrawerVisible(false);
    }
    return (
        <>
            <Drawer title="Basic Drawer" placement="left" visible={drawerVisible} width={700} onClose={closeDrawerVisible}>

                <Singletour tour={data} />

            </Drawer>
            <div className="tourcard-container">
                <div className="image"> <img src={data.images[0]} width="100%"></img></div>


                <div className="tour-description" >
                    <h1 onClick={() => handleClickDrawerVisible()}>{data.title}</h1>
                    <p>{data.description}</p>
                    <h1>Date:{data.dateScheduled}</h1>
                    <h1>Available seats{data.seats}</h1>
                    <div className="more"  >

                        <a href="#"onClick={() => handleClickDrawerVisible()}>Read more...</a>
                 
           </div>
            </div>

        </div> 

</>

    )
}
export default TourCard