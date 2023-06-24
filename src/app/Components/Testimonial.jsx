import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Testimonial = () => {
  return (
    <section>
        <div class="max-w-6xl px-5 mx-auto mt-32 text-center">
            <h2 class="text-4xl font-bold text-center">
            What they’ve said

            </h2>
            {/* testimonial Container */}
            <div class="flex flex-col mt-24 md:flex-row md:space-x-6">
                {/* testimonial 1 */}
                <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
                    <Image
                    className='w-16 -mt-14 '
                    src="/assets/images/avatar-anisha.png"
                    width={72}
                    height={72}
                    alt="image"
                    />
                    <h5 className='text-lg font-bold'>Anisha Li</h5>
                    <p className='text-sm text-darkGrayishBlue'>
                    “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”
                    </p>
                </div>

                 {/* testimonial 2 */}
                 <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
                    <Image
                    className='w-16 -mt-14 '
                    src="/assets/images/avatar-Ali.png"
                    width={72}
                    height={72}
                    alt="image"
                    />
                    <h5 className='text-lg font-bold'>Ali Bravo</h5>
                    <p className='text-sm text-darkGrayishBlue'>
                    “We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”
                    </p>
                </div>

                 {/* testimonial 3 */}
                 <div className='hidden  flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
                    <Image
                    className='w-16 -mt-14 '
                    src="/assets/images/avatar-Richard.png"
                    width={72}
                    height={72}
                    alt="image"
                    />
                    <h5 className='text-lg font-bold'>Richard Watts</h5>
                    <p className='text-sm text-darkGrayishBlue'>
                    “Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”
                    </p>
                </div>

            </div>
            {/* button  */}
            <div className='my-16'>
            <Link href="/" className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'>Get Started</Link>
            </div>



        </div>
    </section>
  )
}

export default Testimonial