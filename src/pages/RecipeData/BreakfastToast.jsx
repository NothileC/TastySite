import React from 'react'
import { PRODUCTS } from '../../products';
import { Product } from './Product';

const BreakfastToast = (props) => {
    const {productImage, title, ingredients, prep } = props.data;
  return (
    <div className='productData'>
            <img src={productImage} alt={title} />
            <h2>{title}</h2>
            <p>{ingredients}</p>
            <p>{prep}</p>
        </div>
    );
}

export default BreakfastToast
