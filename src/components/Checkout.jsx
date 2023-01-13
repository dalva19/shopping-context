import React from "react";
import { useContext } from "react";
import CartContext from "../CartContext";

function Checkout() {
 
  const {items, removeFromCart} = useContext(CartContext);
  const total = items.reduce((acc, current) => acc + current.price, 0)

  return (
    <div className="checkout">

      <div className="cart-header">
        <h1>Checkout</h1>
        <div className="cart-total">
           <h2>Total: ${total} </h2>
         </div>
      </div>
    

    <div className="shopping-bag">
      {items.map((item) => (
        <div >
          <div className="cart-item">
             <h2>{item.name}{' '}-{' '} </h2>
              <h3>${item.price}</h3>
          </div>
          
          <h4 className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</h4>
          <hr className="line"/>
        </div>
      ))}
    </div>

    


    </div>
  )
}

export default Checkout;