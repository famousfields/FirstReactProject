import { BrowserRouter, BrowserRouter as Routes, NavLink, Route} from "react-router-dom";
import Create from "../Pages/Create";
import Home from "../Pages/Home";
import { AiTwotoneHome, AiFillAccountBook, AiFillFileAdd} from "react-icons/ai";
import { FaBars} from "react-icons/fa";
import "../index.css";


const SideBar = ({children}) => {
    const menuItem = [
        {
            path: "/",
            name: "Home",
            icon: <AiTwotoneHome/>
        },
        {
            path: "/create",
            name: "Create",
            icon: <AiFillFileAdd/>
        },
        {
            path: "/explore",
            name: "Explore",
            icon: <AiFillAccountBook/>
        },
    ]
    return ( 
       <div className="container">
        <div className="SideBar">
            <div className="top_section">
                <h1 className="logo">logo</h1>
                <div className="bars">
                    <FaBars/>
                </div>
            </div>
            <ul className="SideBarList">
                {menuItem.map((item,index) => (
                    <NavLink 
                        to={item.path} 
                        key = {index} 
                        className = "link" 
                        >

                        <div id="icon">{item.icon}</div>
                        <div id="link_text">{item.name}</div>
                    </NavLink>

                ))}
            </ul>
        </div>
            <main>{children}</main>
       </div>
     );
}
 
export default SideBar;