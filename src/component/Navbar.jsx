import { NavLink } from "react-router-dom";
import "./Navbar.css" ;
import { useAuth0 } from "@auth0/auth0-react";
export const Navbar =()=>{
    const { loginWithRedirect ,logout,isAuthenticated } = useAuth0();
return (
    <>
        <header>
            <div class="container">
                <div className="logosec">
                 <NavLink to="/" className="links">MoterCar</NavLink>
                </div>
                <div className="secnav">
                    <ul>
                        <li><NavLink to="/" className="links">Home</NavLink></li>
                        <li><NavLink to="/about" className="links">About</NavLink></li>
                        <li><NavLink to="/contect" className="links">Contect</NavLink></li>
                        <li><NavLink to="/services" className="links">Services</NavLink></li>
                        {/* <li><NavLink to="/loginout" className="links">Logout</NavLink></li> */}
                        <li><NavLink to="/registration" className="links">SignUp</NavLink></li>
                        {/* <li><NavLink to="/login" className="links">Login</NavLink></li> */}
                        {isAuthenticated? <li> <button className="btnoflogoiut" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button></li>:  <li><button className="btnoflogoiut" onClick={() => loginWithRedirect()}>Log In</button></li> }
                      
                    </ul>
                </div>
            </div>
        </header>
    </>
)
}