import React from 'react';

const Hero = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 items-center p-5'>
      <div>
        <h2 className='flex text-[40px] md:text-[50px] font-bold animate-slide-in-left'>
          Premium RENT
          <span className='text-blue-500 animate-fade-in'> CAR</span>
        </h2>
        <h3 className='text-[20px] text-gray-600 mt-4 animate-fade-in'>
          Welcome to RentCar, your premier destination for hassle-free car rentals. <br />
          Book the selected car effortlessly, Pay <br />
          for driving only, Book the Car Now. <br />
        </h3>
        <button className='p-2 mt-5 bg-blue-500 px-4 text-white text-[18px] rounded-full hover:scale-105 transition-transform duration-300 ease-in-out animate-bounce'>
          Explore Cars
        </button>
      </div>
      <div className='flex justify-center mt-5 md:mt-0'>
        <div className='relative w-[650px] h-[350px] overflow-hidden rounded-md shadow-lg'>
          <img 
            src="./logo1.jpg" 
            alt="hero" 
            className='w-full h-full object-cover transform hover:scale-110 transition-transform duration-500 ease-in-out animate-slide-in-right'
          />
          <div className='absolute inset-0 bg-black opacity-20 hover:opacity-10 transition-opacity duration-300 ease-in-out rounded-md'></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
