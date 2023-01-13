import React from "react";
import {IoShirtOutline} from 'react-icons/io5';
import { AiFillShopping } from "react-icons/ai";
import { useContext } from "react";
import CartContext from "../CartContext";

function Card({name, price, id}) {
 
  const {addToCart} = useContext(CartContext);

  return (
    <div className="card">

      <div className="product-box">
        <IoShirtOutline size={150}/>
      </div>

      <div className="purchase">
        <h3>{name}</h3>
        <AiFillShopping size={20} onClick={() => addToCart(name, price, id)} />
      </div>

      <h4>${price}</h4>
    </div>
  )
}

export default Card;