import React from 'react';

export const Product = (props) => {
    const {id, productImage,title,description, ingredients}=props.data;
  return  (
    <div className='product'>
        <img src={productImage} alt='product'></img>

        <div className='description'>
            <p>
                <b>{title}</b>
            </p> 
            <p>
                {description}
            </p>
            <p>
                {ingredients}
            </p>
            <button>View</button>

        </div>
       
    </div>
);
};

