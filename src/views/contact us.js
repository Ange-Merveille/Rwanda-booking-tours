import React from"react";
import "../components/Homelayout";
import Homelayout from "../components/Homelayout";
const Contactus= () => {
    return (
<Homelayout>
    <div className="form-contact">
        <h6 style={{color:'white'}}>CONTACT US</h6>
        <p>Do you have any questions or wishes??</p>
        <div className="contactus-form">
            <h7>Send Message</h7><br/><br/>
        <label for='input'>Email:</label>
        <input type="text" style={{width: "55%"}}/><br/><br/><br/>
        <label for="input">Password:</label>
        <input type="password" style={{width: "55%"}}/><br/><br/><br/>
        <label for="input">Send message:</label>
        <input type="text" style={{width:"55%",height:"100px"}}/><br/><br/><br/><br/><br/><br/><br/>
        <input type="submit" style={{with:"100%",height:"30px"}}/> 
        </div>
        </div>
        





    

</Homelayout>
    );
}
export default Contactus;