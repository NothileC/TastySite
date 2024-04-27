import React from 'react';

export const Product = (props) => {
    const {id, productImage,title,description}=props.data;
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

        </div>
       
    </div>
);
};

