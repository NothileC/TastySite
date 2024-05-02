import React from 'react'
import { PRODUCTS } from '../../products';
import { Product } from './Product';

import './Recipelist.css';




const Recipelist = () => {
  return (
    <div className="list">
      <div className="listTitle">
        <h1>Our Recipes:</h1>
      </div>

      <div className="products"> 
      {PRODUCTS.map((products) => (
        <Product data={products}/>
      ))}
        

      </div>


    </div>
  )
}

export default Recipelist