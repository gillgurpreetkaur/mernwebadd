import { useState } from "react"
import "./Signup.css" ;
import { toast } from 'react-toastify';
export const Contect=() =>
{

    const [user,setUser] = useState({
     username:"",
     emai:"",
     message:"",
    });
    const handleInput =(e)=>
        {
        console.log(e);
        let name=e.target.name;
        let value=e.target.value;
        setUser({
            ...user,
            [name]:value,
        });
        };
        const handlesubmitdata = (e) =>
            {
                e.preventDefault();
                console.log(user);
                toast("Done 😍");
            }
          
          

return (
    <>
   <main>
        <div className="Main-Container">
        <div className="container-of-img">
        <img src="https://static.vecteezy.com/system/resources/previews/003/115/742/non_2x/business-woman-investment-consultant-analyzing-company-free-photo.jpg" alt="Description" />
        </div>
          <div className="container-of-regissec">
          <form onSubmit={handlesubmitdata} action="" method="Post">
            <h1>ContactUs</h1>
            <label>
              <h3>Username</h3>
              <input type="text" name="username" placeholder="Enter your name" id="username" required autoComplete="off" value={user.username} onChange={handleInput}></input>
            </label>
            <label>
              <h3>Email</h3>
              <input type="mail" name="email" placeholder="Enter Email Id" id="email" required autoComplete="off" value={user.email} onChange={handleInput}></input>
            </label>
            <label>
              <h3>Message</h3>
              <input type="text" name="message" placeholder="Enter your Fedback here !!!" id="message" required autoComplete="off" value={user.password} onChange={handleInput}></input>
            </label><br/>
            <button class="btns">Submit</button><br/>
            </form>
          </div>
        </div>
        </main>
    </>
)
}