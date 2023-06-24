import React from 'react'
import Link from 'next/link'

const Cta = () => {
  return (
    <section className='bg-brightRed'>
      {/* Flex Container */}
      <div className='container flex flex-col items-center justify-between px-6 py-6 mx-auto space-y-12 md:flex-row md:space-y-0'>
        {/* heading */}
        <h2 className='text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left'>
        Simplify how your team works today.
        </h2>
        {/* button */}
        <div>
        <Link href="/" className='p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-900 '>Get Started</Link>

      </div>
      </div>

    </section>
  )
}

export default Cta