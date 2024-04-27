import React from 'react';
import './Homepage.css';
import Hero from '../../assets/Hero.jpg';

const Homepage = () => {
  return <>
    <div className='realtive z-[-1]'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
          {/* text-content section */}
          <div className="space-y-7 text-dark order-2 sm:order-1">
            <h1 className="text-5xl">
              Explore a World of Flavors, Aromas, and <span className='text-secondary font-cursive text-7xl'>Culinary</span>delights.

            </h1>
            <p>
              From mouth-watering mains to delectable desserts, embark on a culinary journey like never before!
            </p>
          </div>
          <div className='order-1 sm:order-2'>
            {/* Image section */}
            <img src={Hero} alt="" />
          </div>

        </div>


      </div>
      

    </div>
  </>
}

export default Homepage