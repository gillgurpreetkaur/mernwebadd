import { useState } from "react"
import "./Signup.css" ;
import { toast } from 'react-toastify';
export const Contectus=() =>
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
                toast("done😍 ");
            }
          
          

return (
    <>
   <main>
        <div className="Main-Container">
          <div className="container-of-img">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.089244757407!2d72.45286537960233!3d23.529292342643913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c476c5013fd03%3A0xa1fe01d9ab30482!2sGanpat%20University%20(GUNI)%2C%20India!5e0!3m2!1sen!2sin!4v1717130193045!5m2!1sen!2sin"
           width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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