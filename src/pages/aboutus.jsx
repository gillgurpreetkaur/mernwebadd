import { useState } from "react";
import "./aboutscss.css";
import Buyinprd from "./Buyinprd.jsx";
import Menucard from "./components/Menucard.jsx";
import Card from "./components/courserapi.jsx";
export const AboutUs= ()=>{
    const [menuData,setMenuData] = useState(Card);
    const [cart, setCart] = useState([]);

    return(
    <header className="cardsdiv" size={cart.length}>
    <div className='continue-courses'>
    <div className="arrow-content">
    <img src="/images/arrowicon.png" alt=""></img>
    <h2>Continue Studies 😁</h2>
    </div>
    <div className="addtocatdbuket">
    <img src="/images/addit.webp"></img>
    <p>{cart.length}</p>
    </div>
    </div>
     <Buyinprd menuData={menuData}  />
   </header>
    );
}