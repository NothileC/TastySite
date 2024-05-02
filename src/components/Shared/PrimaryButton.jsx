import React from 'react';
import { ArrowRight } from 'phosphor-react';
import { Link } from 'react-router-dom';

const PrimaryButton = () => {
  return <>
   <div className='flex items-center group'>
   <Link to="/Recipelist"><button className='bg-primary h-[40px] text-white px-3 py-2'>See Our Dishes</button></Link>
    <ArrowRight className='inline-block group-hover:translate-x-2 duration-200 p-2 text-base h-[40px] w-[40px] bg-primaryDark'/>

  </div>
  </>;
  
};

export default PrimaryButton;