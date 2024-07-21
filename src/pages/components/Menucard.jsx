import React from 'react'
import "../homes.css";
function Menucard({menuData  }) {
    // console.log(menuData);
  return (
    <> 
      <section className="container">
    {menuData.map((curElem)=>{
        return (
            <>
          
                    <div className="card"key={curElem.id}>
                        <div className="imgsec">
                        <img src={curElem.images} alt=""/>
                        </div>
                        <div className="textcontain">
                            <h5>{curElem.title}</h5>
                            <p>{curElem.author}</p>
                            <p><span>{curElem.rating}</span></p>
                            <div className='sidebtn'>
                            <div className='prisesec'>
                            <h4>{curElem.price}</h4>
                            </div>
                            <div className='btnmove'>
                            {/* <button className='btnbuy'>Buy Now</button> */}
                            <button className='btnbuy'  onClick={() => addToCart(curElem)}>Buynow</button>
                            </div>
                            </div>
                           
                        </div>
                    </div>
            </>
        );
        
    })}
    </section>
    </>
  )
}

export default Menucard;
