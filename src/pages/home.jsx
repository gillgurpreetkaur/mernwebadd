
import "./homes.css";
import Card from "./components/courserapi";
import Menucard from "./components/Menucard";
import { useState } from "react";

export const Home= ()=>{
  
 const [menuData,setMenuData]= useState(Card);


    return(
        <> 
        <div className="mainsec">
            <div className="contentsec">
                <h3>Don’t just browse the web — design it</h3>
                <p>Website design by yourself is one of these. Thanks to the evolution of website builders, you can design a website and craft an impressive online presence of your own. Using professional web design features, you can generate revenue, nurture a community of fans, and promote your brand online.</p>
                <button className="btn">Start Now</button>
            </div>
            <div className="img_src">
        <img src="/images/hom2.jpg" alt=""></img>
            </div>
        </div>
          
            <div className="letslearn">
                <h2>Let's start learning</h2>
            </div>
            <div className="learnig_start">
                    <h3>Explore our course collection</h3>
                    <p>Choose from a vast selection of courses on the latest in-demand skills to achieve your goals.</p>
                    <button className="btn">Explore  course</button>
                </div>
            <div className="next_lear"> <h2>What to learn next</h2><h3>Our top pick for you</h3></div>

            <div className="uiuxmain">
                <div className="img">
                <img src="/images/home3.png" alt="Description" />
                </div>
                <div className="textcontainer">
                <h3>Learn User Experience Design from A-Z:<br/>Adobe XD UI/UX Design</h3>
                <h4>Learn how to become a professional UX/UI Designer and create <br/>
                beautiful websites and applications from scratch.</h4>
                <p>By Daniel Walter Scott</p>
                <p>Updated March 2022 9.5 Total hours.84 Lectures.All Level</p>
                <p><span>4.6 Total Rating</span></p>
                <h4>$4,099</h4>
                <button className="btn">Bestseller</button>
                </div>
            </div>
            <div className="populartop">
                <h2>Popular topics to learn</h2>
            </div>
            <Menucard menuData={menuData}/>
            
        </>
    )
}