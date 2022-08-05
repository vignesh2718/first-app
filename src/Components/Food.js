import React , {useState} from "react";

import Popup from "./popup.js";

function FoodCard(props){
    // const handlePopup = () =>{
    //     setShowPopup(!showPopup);
    //     console.log("Button clicked");
    // }
    const [showPopup, setShowPopup] = useState(false);
     
    const[value, setValue] = useState( 0);
    
    function CheckOrder(){
setShowPopup(true);

      if(Number(props.price)>170){

        console.log("Eligible for discount and also Free Delivery");
        console.log("Your Order: "+props.name);
      }
else{
    console.log("No Free Delivery : " + (Number(props.price)+10));
    console.log("Your Order: "+props.name);
}
    }
   function addValue(){
    setValue(value+1);
   }
 
    

return(
    <div className="food-container">
        {showPopup && <Popup name={props.name} des={props.des} price={props.price} close={()=>setShowPopup}/>}
    <div className="food-header">
        <img src={props.img} className="food-img" alt="food-img" ></img>

    </div>
    <p className="food-name">{props.name} </p>
    <p className="food-des">{props.des}</p>
    <p className="food-price">{props.price}</p>
    <button className="btn" onClick={function(event){addValue(); CheckOrder(); }} >Order Now  ({value})</button>
    </div>

);
}








export default FoodCard;