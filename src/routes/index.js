import  React,{useEffect} from "react";
import { Routes,Route} from "react-router-dom";
import Home from "../views/Home";
import Aboutus from "../views/About us";
import Contactus from "../views/contact us";
import Tours from "../views/tours";
import Singletour from "../components/Singletour";
import Newtour from "../views/Dashboard/newtour";
import Dashlayout from "../components/dashlayout";
import Alltours from "../views/Dashboard/alltours";
const isuserLogedIn=localStorage.getItem("userLogedIn");
const Index=()=>{

    return(
        <>
        <Routes>
            <Route  path="/home" element={<Home/>}></Route>
            <Route  path="/about" element={<Aboutus/>}></Route>
            <Route path="/contactus" element={<Contactus/>}>
            </Route>
            <Route path="/tours" element={<Tours/>}></Route>
            <Route path="/Singletour" element={<Singletour/>}>
                
            </Route>
            </Routes>
            {isuserLogedIn?(
            <Dashlayout>
                <Routes>
            <Route path="/dash/newtour" element={<Newtour/>}> 
            </Route>
            <Route path="/dash/alltours" element={<Alltours/>}></Route>
            </Routes>

        
</Dashlayout>):(
    <></>
)


            }  
        </>
    )
}
export default Index;