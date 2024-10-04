import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Hero1 = () => {
  return (


<section
  className="relative bg-[url(/herobgimage.png)] bg-cover bg-center bg-no-repeat"
>
  
  <div
    className="absolute inset-0 bg-gray-900/75  "
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center md:text-left ">
    <div className='flex flex-col lg:flex-row items-center lg:items-end gap-3 '>
    <img src='/logo-symbol.png' className='aspect-auto h-20'/>
    <h2 className='font-semibold text-white text-xl'>Green <span className='text-[#94c019]'>Grow</span>  <span className='text-[#bb9200]'>Landscape</span></h2>
    </div>
    <h1 className="bold-52 lg:bold-88 text-white">
          Transform <br /> <span className="text-[#30af5b]">Green</span> Paradise
        </h1>
        <p className="regular-16 mt-6 mb-6 text-gray-10 xl:max-w-[520px]">
          At Green Grow Landscape, we bring nature’s beauty to your doorstep.
          From vibrant gardens to functional outdoor living spaces, we create
          landscapes that inspire.
        </p>

        <div className="mb-3  flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-green-50">
            2K
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Get Started" variant="btn_green hover:bg-green-700 duration-300" />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
    </div>
  </div>
</section>
  )
}

export default Hero1