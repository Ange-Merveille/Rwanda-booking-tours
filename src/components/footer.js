
import React from "react";
import "./footer.css";
import {WhatsAppOutlined,InstagramOutlined,TwitterOutlined } from '@ant-design/icons';

const Footer = () => {
    return(
        <div className="footer">
            <div className='row1'>
            <h1>Follow Us On</h1>
            <div style={{display:"flex"}}>
            {/* <p><MessageOutlined style={{ fontSize: '30px', color: '#08c' }} /></p> */}
            <a href="https://web.whatsapp.com/">< WhatsAppOutlined style={{ fontSize: '50px', color: 'green',padding:'20px' }} /></a>
            <a href="https://twitter.com/i/flow/login"><TwitterOutlined style={{fontSize:'50px',color:'blue',padding:'20px'}} /></a>
            <p><InstagramOutlined style={{fontSize:'50px',color:'pink',padding:'20px'}}/></p>
            </div>
            </div>
            <div className="slide-container">
            <div className='row2'>

                <h1>Our address</h1>
                <p>Kigali,Kicukiro,
                     kk577st
                </p><br/>
                <p>Rwanda Booking Tours</p>


            </div>
            <div className="row3">
                <h1>Contact us</h1>
                <p>Email: rwandabookingtours@gmail.com</p>
                <p>Calls: (+250)786929350</p>

            </div>
            </div>
            <div className="copyright">
                <p>&copy;ANGE MERVEILLE</p>
            </div>
            {/* <hr></hr> */}
        </div>
    )
}
export default Footer;


