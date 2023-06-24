"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

const Navber = () => {
  const [nav,setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  
  return (
    // Naver
    <nav className='relative container mx-auto p-6 bg-white'>
         {/* flex container */}
       <div className='flex items-center justify-between'>
        {/* logo */}
        <div className="pt-2">
            <Image 
            src="/assets/images/logo.svg"
            width={147}
            height={24}
            alt="logo"/>

        </div>
        {/* Menu items */}
        <div class="hidden  space-x-6 md:flex">
            <Link href="/" className='hover:text-darkGrayisBlue'>Pricing</Link>
            <Link href="/" className='hover:text-darkGrayisBlue'>Product</Link>
            <Link href="/" className='hover:text-darkGrayisBlue'>About Us</Link>
            <Link href="/" className='hover:text-darkGrayisBlue'>Careers</Link>
            <Link href="/" className='hover:text-darkGrayisBlue'>Community</Link>
            

        </div>

        <Link href="/" className='hidden  p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block'>Get Started</Link>

        {/* Menu icon */}
        <button onClick={handleNav} className='open block md:hidden focus:outline-none'>
          {nav ? (
            <AiOutlineClose className='h-[18px] w-[32px]'/>
           

          ): (
            <GiHamburgerMenu className='h-[18px] w-[32px]'/>
          )}
         
         

        </button>

       </div>

       {/* Mobile Menu */}
       <div className='md:hidden'>
        <div id="menu" className={ nav ?  'absolute flex flex-col items-center  self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
        : 'hidden'}>
            <Link href="/" className='hover:text-darkGrayisBlue'>Pricing</Link>
            <Link href="/" className='hover:text-darkGrayisBlue'>Product</Link>
            <Link href="/" className='hover:text-darkGrayisBlue'>About Us</Link>
            <Link href="/" className='hover:text-darkGrayisBlue'>Careers</Link>
            <Link href="/" className='hover:text-darkGrayisBlue'>Community</Link>


        </div>

       </div>
    </nav>
  )
}

export default Navber