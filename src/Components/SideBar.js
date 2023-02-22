import { BrowserRouter, BrowserRouter as Routes, Route} from "react-router-dom"
import Create from "../Pages/Create";
import Home from "../Pages/Home";
import 
{ 
    AiTwotoneHome,
    AiFillAccountBook
 } from "react-icons/ai";
 import {IoCreateOutline} from "react-icons/io"


const SideBar = () => {
    const menuItem = [
        {
            path: "/",
            name: "Home",
            icon: <AiTwotoneHome/>
        },
        {
            path: "/create",
            name: "Create",
            icon: <IoCreateOutline/>
        },
        {
            path: "/explore",
            name: "Explore",
            icon: <AiFillAccountBook/>
        },
    ]
    return ( 
        <BrowserRouter>
        <SideBar></SideBar>
            <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/create" element = {<Create/>}/>
                <Route path = "/explore" element = {<Explore/>}/>
            </Routes>
        </BrowserRouter>
     );
}
 
export default SideBar;