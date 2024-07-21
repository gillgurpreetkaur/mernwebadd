import React, { useEffect, useRef } from 'react';
import {NavLink} from "react-router-dom";
import "./Navbars.css";
import { IonIcon } from '@ionic/react';
import { useAuth0 } from "@auth0/auth0-react";
import { menuOutline, closeOutline } from 'ionicons/icons';
export const Navbar = ()=>{
  const { loginWithRedirect ,logout,isAuthenticated } = useAuth0();
        const mobilIconRef = useRef(null);
        const navBarRef = useRef(null);
      
        useEffect(() => {
          const mobilIcon = mobilIconRef.current;
          const navBar = navBarRef.current;
      
          const toggleNavbar = () => {
            navBar.classList.toggle("active");
          };
          if (mobilIcon) {
            mobilIcon.addEventListener('click', toggleNavbar);
          }
      
          return () => {
            if (mobilIcon) {
              mobilIcon.removeEventListener('click', toggleNavbar);
            }
          };
        }, []);

        return(
                <>
            <div className="maincontent" ref={navBarRef}>
            <div className="logocontainer">
            <img src="/images/dj.png" alt="Description" />
                </div>
                <div className="listContainer">
                <ul className="urlhead">
                    <li><NavLink to="/home" className="link">Home</NavLink></li>
                    {/* <li><NavLink to="/aboutus" className="links">AboutUs</NavLink></li> */}
                    <li><NavLink to="/courses" className="links">Courses</NavLink></li>
                    {/* <li><NavLink to="/login" className="links">Login</NavLink></li> */}
                    <li><NavLink to="/registration" className="links">Signup</NavLink></li>
                    <li><NavLink to="/contect" className="links">Contectus</NavLink></li>
                    {isAuthenticated? <li> <button className="btnoflogoiut" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Logout
    </button></li>:  <li><button className="btnoflogoiut" onClick={() => loginWithRedirect()}>Login</button></li> }
                    </ul>
                </div>
                <div className="mobil-icon" ref={mobilIconRef}>
                <IonIcon icon={menuOutline} className="mobil-nav-icon menu-icon" />
                <IonIcon icon={closeOutline} className="mobil-nav-icon close-icon" />
    </div>
              </div>
        </>
    )
}