import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import React from 'react';

const Navbar = () => {
  return (
    <div className='flex items-center shadow-md border-b-[1px] p-3 animate-fade-in-down'>
      <img 
        src="./logo.jpg" 
        alt="Logo" 
        width={130} 
        height={100} 
        className='ml-[100px] cursor-pointer justify-between transform hover:scale-105 transition-transform duration-300 ease-in-out animate-slide-in-left' 
      />
      <div className='hidden md:flex gap-20'>
        <Link href="/">
          <h2 className='ml-[400px] hover:bg-blue-500 cursor-pointer p-2 rounded-full hover:text-white transition-colors duration-300 ease-in-out animate-fade-in-right'>
              Home
          </h2>
        </Link>
        
        <Link href="/about">
          <h2 className='hover:bg-blue-500 cursor-pointer p-2 rounded-full hover:text-white transition-colors duration-300 ease-in-out animate-fade-in-right'>
              About
          </h2>
        </Link>
        
        <Link href="/contact">
          <h2 className='hover:bg-blue-500 mr-[100px] cursor-pointer p-2 rounded-full hover:text-white transition-colors duration-300 ease-in-out animate-fade-in-right'>
              Contact Us
          </h2>
        </Link>
      </div>
      <div className='ml-auto mr-[100px] animate-slide-in-right'>
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
