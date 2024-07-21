
import "./homecss.css";
export const About =()=>{
    return (
      <>
         <main class="main_container">
       <div className="leftsidediv">
        <p>What is the latest new technology?</p>
        <h2>Emerging technologies</h2>
        <p>Emerging technologies are technologies whose development, practical applications, or both are still <br/>
        largely unrealized. These technologies are generally new but also include older technologies finding new applications. Emerging technologies are often perceived as capable of changing the status quo.</p>
        <p>Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.</p>
        <div className="btndiv">
          <button  className="btn1">Connect Us</button>
          <button className="btn2">Learn More</button>
        </div>
       </div>
       <div className="rightsidediv">
    <img src="/images/17-istockphoto.webp" alt="Description" />
       </div>
      </main>
      <footer><h2>Created By Gurpreet Kaur</h2></footer>
      </>
    )
  };