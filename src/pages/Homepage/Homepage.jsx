import React from 'react';
import './Homepage.css';
import Hero from '../../assets/hero.png';
import background from '../../assets/heroBg.png';
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
          <div className="space-y-7 text-dark order-2 sm:order-1">
            <h1 className="text-5xl">
             Fresh & Healthy <br></br>recipe dishes made out of love!

            </h1>
            <p className='lg:pr-64'>
              Indulge in culinary creativity with our unique recipes - where every dish tells a story!
            </p>

            {/*button section*/}
            <div>
              <PrimaryButton ></PrimaryButton>
            </div>
          </div>
          <div className='order-1 sm:order-2'>
            {/* Image section */}
            <img src={Hero} alt="" className='w-full sm:scale-60 sm:-translate-y-2' />
          </div>

        </div>


      </div>
      

    </div>
  </>
}

export default Homepage