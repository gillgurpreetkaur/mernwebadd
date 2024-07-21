import "./coursess.css";
import "./homes.css";
import Card from "./components/courserapi";
import Menucard from "./components/Menucard";
import { NavLink } from "react-router-dom";
import { useState } from "react";
export const Courses= ()=>{
    const [menuData,setMenuData]= useState(Card);
    const filtter = (category)=>{
        const updatedList = Card.filter((curElem)=>{
            return curElem.category === category;
        });
        setMenuData(updatedList);
    }
    return(
        <>
              <div className="mainsec">
             
            <div className="contentsec">
                <h3>Personal Interest Course (PIC) </h3>
                <p>A course image gives users a snapshot of your course content, and can be a great way to grab a user's attention. Thanks to the evolution of website builders, you can design a website and craft an impressive online presence of your own. Using professional web design features, you can generate revenue, nurture a community of fans, and promote your brand online.</p>
                <button className="btn">Start Now</button>
            </div>
            <div className="img_src">
        <img src="https://www.classcentral.com/report/wp-content/uploads/2020/06/top-100-course-pandemic.png" alt=""></img>
            </div>
           
        </div>
            <div className="populartop">
                <h2>Popular topics to learn</h2>
            </div>
        
              <div className="lins">
                    <ul>
                        <li><NavLink to="#" className="linkss" onClick={()=>filtter("Python")}>Python</NavLink></li>
                        <li><NavLink to="#" className="linkss" onClick={()=>filtter("java")}>Java</NavLink></li>
                        <li><NavLink to="#" className="linkss" onClick={()=>filtter("react")}>React</NavLink></li>
                        <li><NavLink to="#" className="linkss" onClick={()=>filtter("javascript")}>Javascript</NavLink></li>
                         <li><NavLink to="#" className="linkss" onClick={()=>filtter("uiux")}>Ui/Ux</NavLink></li>
                        {/* <li><NavLink to="#" className="linkss" onClick={()=>filtter("all")}>All</NavLink></li> */}
                    </ul>
                </div>
                <br/>
                <br/>
                <Menucard menuData={menuData}/>
        </>
    )
}