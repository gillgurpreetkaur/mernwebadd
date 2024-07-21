import React from 'react'
import { IonIcon } from '@ionic/react';
import { removeOutline, addOutline,trashOutline } from 'ionicons/icons';
function Buyinprd  ({menuData})  {
    console.log(menuData);
    return (
      <> 
        <section>
      {menuData.map((curElem)=>{
  return (
    <>
    <div className="headonediv">
        <div className="cardsec" key={curElem.id}>
            <div className="imgcourses">
            <img src={curElem.images}></img>
            </div>
            <div className="textcontent"><h3>{curElem.title}</h3><p>{curElem.author}</p></div>
            <div className="plus-minus-icons">
            <IonIcon icon={removeOutline} className=" " />
            <input type="text" placeholder="2"/>
            <IonIcon icon={addOutline} className="" />
            </div>
            <div className="price">
                <h3>{curElem.price}</h3>
            </div>
            <div className="delete">
            <IonIcon icon={trashOutline} className=""/>
            </div>
        </div>
        <hr/> 
    </div>
    </>
  );
}
      )};
      </section>
      </>
      );
      };
export default Buyinprd;
