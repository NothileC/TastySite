import React from 'react';
import Button from './Button';


export const Product = (props) => {
    const {productImage,title,tagLine}=props.data;


    
    
    


  return  (

    <div className='product'>
        <img src={productImage} alt='product'></img>

        <div className='description'>
            <p>
                <b>{title}</b>
            </p> 
            <p>
                {tagLine}
            </p>
            
            
              <Button></Button>
            

        </div>
        
       
    </div>
);
};

