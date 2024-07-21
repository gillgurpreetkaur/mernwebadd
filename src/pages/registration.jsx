import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css" ;
import { toast } from 'react-toastify';
export const Registration =()=>{
  const [user,setUser] = useState({
    username:"",
    email:"",
    phone:"",
    password:"",
  });
  const navigate = useNavigate();
  const handleInput = (e) =>{
    console.log(e);
    let name =e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]:value,
    });
  };
  const handlesubmitdata = async(e) =>{
  e.preventDefault();
  console.log(user);
  toast("Your Message has ben Submited 👍 ");
  try{
    const responce = await fetch(`http://localhost:5000/api/auth/registration`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(user),
    });
    if(responce.ok)
      {
        setUser ({username:"",
        email:"",
        phone:"",
        password:"",});
        navigate("/login");
      }
    console.log(responce);

    }
    catch(error){
     console.log("registration::Error");
    }
    }
  return  (
      <>
      <main>
        <div className="Main-Container">
        <div className="container-of-img">
        <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Top_Skills_Youll_Need_to_Achieve_Expert_Status_in_AI_and_Machine_Learning.jpg" alt="Description" />
        </div>
        <div className="container-of-regissec">
        <form onSubmit={handlesubmitdata}>
        <h1>Registration Form</h1>
        <label>
        <h3>Username</h3>
        <input type="text" name="username" placeholder="Enter your name" id="username" required autoComplete="off" value={user.username} onChange={handleInput}></input>
        </label>
        <label>
        <h3>Email</h3>
        <input type="mail" name="email" placeholder="Enter Email Id" id="email" required autoComplete="off" value={user.email} onChange={handleInput}></input>
        </label>
        <label>
        <h3>Phone</h3>
        <input type="number" name="phone" placeholder="Phone Number" id="phone"required autoComplete="off" value={user.phone} onChange={handleInput}></input>
        </label>
        <label>
              <h3>Password</h3>
              <input type="password" name="password" placeholder="Password" id="password" required autoComplete="off" value={user.password} onChange={handleInput}></input>
            </label><br/>
            <button class="btns">Submit</button><br/>
            </form>
          </div>
        </div>
        </main>
      </>
    )
  };