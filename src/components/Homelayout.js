import react from "react";
import Header from "./header";
import Footer from "./footer";


const Homelayout=({children})=>{
    return(
    <div className="home-container">
    <Header/>
    <div>
    {children}

    </div> <Footer/>
    </div>
    
    )
    }
    
    
export default Homelayout;