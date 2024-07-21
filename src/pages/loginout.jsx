import { useEffect } from "react"
import { Navigate } from "react-router-dom";

export const Loginout=()=>{
    useEffect(()=>{
    // geting token values++++++++
        const [token,setToken] = useState(localStorage.getItem("token"));

    
          setToken(" ");
          return localStorage.removeItem("token");
        
    },[Lougoutuser]);

    return <Navigate to="/login"/>
};