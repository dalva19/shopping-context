import React from "react";
import Card from "./Card";

function Products() {
 
  const products = [
    {id: 1, name: 'vest', price: 50},
    {id: 2, name: 'jacket', price: 70},
    {id: 3, name: 'sweater', price: 90},
    {id: 4, name: 'tshirt', price: 20},
    {id: 5, name: 'necklace', price: 100},
    {id: 6, name: 'jumper', price: 40},
    {id: 7, name: 'jeans', price: 95},
  ]
  return (
    <div className="products">
    <h1>Products</h1>

    <div className="product-list">
      {products.map((product) => (
        <Card id= {product.id} name={product.name} price={product.price} />
      ))}
    </div>
    </div>
  )
}

export default Products;