import React from 'react';
import './Homepage.css';
import Hero from '../../assets/Hero.jpg';
import background from '../../assets/background.jpg';
import PrimaryButton from '../../components/Shared/PrimaryButton';


const Background = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  border: "10px",

};

const Homepage = () => {
  return <>
    <div style={Background}  className='realtive z-[-1]'>
      <div className="container py-16 sm:py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
          {/* text-content section */}
          <div className="space-y-7 text-white order-2 sm:order-1">
            <h1 className="text-5xl">
              Explore a World of <span className=' font-cursive text-orange-700'>Flavors</span>, <span className='font-cursive text-red-700'>Aromas</span>, and <span className='text-secondary font-cursive text-7xl'>Culinary</span> delights.

            </h1>
            <p className='lg:pr-64'>
              From mouth-watering mains to delectable desserts, embark on a culinary journey like never before!
            </p>

            {/*button section*/}
            <div>
              <PrimaryButton ></PrimaryButton>
            </div>
          </div>
          <div className='order-1 sm:order-2'>
            {/* Image section */}
            <img src={Hero} alt="" className='w-full sm:scale-60 sm:-translate-y-16' />
          </div>

        </div>


      </div>
      

    </div>
  </>
}

export default Homepage