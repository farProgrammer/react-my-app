import React from "react";
import CartItems from "./Cartitems";
import "./ShoppingCart.css";



const ShoppingCart = ({items,username}) => {
  const Total = items.reduce((acc,i) =>{
    return acc + i.price * i.quantity
  },0)
    return (
        <div className="ShoppingCart">
        <h1 className="ShoppingCart-header">{username}'s SHOPPING CART</h1>
     
      <div>
        {items.map(i=>(

          <CartItems key={i.id} item={i.name} img={i.img} 
          price ={i.price} quantity={i.quantity}/>

              
  ))}
      </div>
      <b className="ShoppingCart-Total">CART TOTAL:${Total}</b>
      </div>
    )
}

export default ShoppingCart;