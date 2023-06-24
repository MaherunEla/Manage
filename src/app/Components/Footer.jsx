import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiFillFacebook, AiFillYoutube,AiFillInstagram} from 'react-icons/ai'
import {BsTwitter,BsPinterest} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='bg-veryDarkBlue'>
        <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
            <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
                <div className='mx-auto my-6 text-center text-white md:hidden'>
                Copyright &copy; 2023, All Rights Reserved
                </div>
                {/* logo */}
                <div>
                    <Image
                    className="h-8"
                    src="/assets/images/logo-white.svg"
                    width={147}
                    height={32}
                    alt="logo"
                    />
                </div>
                {/* social icons */}
                <div className='flex justify-center space-x-4'>
                    <Link href="/">
                        <AiFillFacebook className='h-8 fill-white'/>
                    </Link>
                    <Link href="/">
                        <AiFillYoutube className='h-8 fill-white'/>
                    </Link>
                    <Link href="/">
                        <BsTwitter className='h-8 fill-white'/>
                    </Link>
                    <Link href="/">
                        <BsPinterest className='h-8 fill-white'/>
                    </Link>
                    <Link href="/">
                        <AiFillInstagram className='h-8 fill-white'/>
                    </Link>

                </div>

            </div>

            {/* list Container */}
            <div className='flex justify-around space-x-32'>
                <div class="flex flex-col space-y-3 text-white">
                    <Link href="/" className='hover:text-brightRed'>Home</Link>
                    <Link href="/" className='hover:text-brightRed'>Priceing</Link>
                    <Link href="/" className='hover:text-brightRed'>Products</Link>
                    <Link href="/" className='hover:text-brightRed'>About</Link>

                </div>
                <div class="flex flex-col space-y-3 text-white">
                    <Link href="/" className='hover:text-brightRed'>Careers</Link>
                    <Link href="/" className='hover:text-brightRed'>Community</Link>
                    <Link href="/" className='hover:text-brightRed'>Privacy Policy</Link>
                   

                </div>
            </div>
            {/* Input Container */}
            <div className="flex flex-col justify-between">
                <form>
                    <div className='flex space-x-3'>
                        <input type="text" className='flex-1 px-4 rounded-full focus:outline-none'
                        placeholder="Updated in your indox" />

                        <button className='px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none'>
                            Go

                        </button>
                        
                    </div>
                </form>
                <div className='hidden text-white md:block'>
                    Copyright &copy; 2023, All Rights Reserved
                </div>

            </div>

        </div>

    </footer>
  )
}

export default Footer