import React, { useState } from 'react';

const Button = () => {



    const [btnState, setBtnState] = useState(false);
    

    const handleClick = () => {
        setBtnState(btnState => !btnState);

    };

    let recipeCheck = btnState ? ' active': '';


  return <>
 <div className='flex items-center group'>
   <button className={`bg-primary h-[40px] text-white px-3 py-2${recipeCheck}`} onClick={handleClick}>
   View
    </button>


  </div>
  </>;
};

export default Button