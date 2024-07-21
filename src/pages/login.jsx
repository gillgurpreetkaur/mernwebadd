import { json } from "react-router-dom";
import "./Signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Login=()=>{
  const [user,setUser] = useState({
  username:"",
  password:"",
  });
  const handleInput =(e) =>{
    console.log(e);
    let name=e.target.name;
    let value=e.target.value;
    setUser({
      ...user,
      [name]:value,
    });
  };
 
  const navigate=useNavigate();
  const handlesubmitdata =async (e) =>{
    e.preventDefault();
    console.log(user);
    try{
     const responce =await fetch(`http://localhost:5000/api/auth/login`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(user),
     });
     console.log(responce);
     if(responce.ok)
      {
        
        alert("login successfully");
        const store_data= await responce.json();
        console.log(store_data);
        localStorage.setItem("token",store_data.token);


        setUser({
          username:"",
          password:"",
        });
        navigate("/home");
      }
    }
    catch(e){
        console.log(e);
        alert("not valid");
    }
  }
;
  return (
    <>
      <main>
        <div className="Main-Container">
          <div className="container-of-img">
          <img src="/images/Automation-blog.jpg" alt="Description" />
          </div>
          <div className="container-of-regissec">
          <form onSubmit={handlesubmitdata}>
            <h1>Login Form</h1>
            <label>
              <h3>Email</h3>
              <input type="mail" name="email" placeholder="Enter Email Id" id="email" required autoComplete="off" value={user.email} onChange={handleInput}></input>
            </label>
            <label>
              <h3>Password</h3>
              <input type="password" name="password" placeholder="Password" id="password" required autoComplete="off" value={user.password} onChange={handleInput}></input>
            </label><br/>
            <button class="btn">Submit</button><br/>
            </form>
          </div>
        </div>
        </main>
    </>
  )
  };