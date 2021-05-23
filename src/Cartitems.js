import React from "react";
import "./Cartitems.css";

const CartItems = ({item,img,price,quantity}) => (
<div className="Cartitem">
    <h4 className="Cartitem-title">{item}</h4> 
    <img  clasName="Cartitem-img" src={img} alt=""/>
    <ul>
        <li>Price:${price}</li>
        <li>Quantity:{quantity}</li>
        <li>
            SubTotal:${price * quantity}
        </li>
    </ul>
</div>


)

export default CartItems;