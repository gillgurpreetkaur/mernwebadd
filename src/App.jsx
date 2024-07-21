import {BrowserRouter, Route, Routes} from "react-router-dom";
import{Home} from "./pages/home";
import{AboutUs} from "./pages/aboutus";
import{Contect}from "./pages/contect";
import{Courses} from "./pages/courses";
import{Registration} from "./pages/registration";
import{Login} from "./pages/login";
import { Navbar } from "./pages/Navbar";
import { Loginout } from "./pages/loginout";
import {Footers} from "./pages/fotters";
const App=()=>{
return (
<>
<BrowserRouter>
<Navbar/>
<Routes>
<Route path="/home" element={<Home/>}/>
{/* <Route path="/aboutus" element={<AboutUs/>}/> */}
<Route path="/contect" element={<Contect/>}/>
<Route path="/courses" element={<Courses/>}/>
<Route path="/registration" element={<Registration/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/loginout" element={<Loginout/>}/>
</Routes>
<Footers/>
</BrowserRouter>
</>
);

}
export default App;
