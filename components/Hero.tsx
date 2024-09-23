'use client'
import Image from 'next/image'
import Button from './Button'


const Hero = () => {
  const handleClick = () =>{
     const element = document.getElementById("features");
     element?.scrollIntoView({
       behavior: "smooth",
     });
  }

  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row" id='hero'>
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">
          Transform <br /> <span className="text-[#30af5b]">Green</span> Paradise
        </h1>
        <p className="regular-16 mt-6 mb-6 text-gray-30 xl:max-w-[520px]">
          At Green Grow Landscape, we bring nature’s beauty to your doorstep.
          From vibrant gardens to functional outdoor living spaces, we create
          landscapes that inspire.
        </p>



        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Get Started" variant="btn_green" handleClick={handleClick}/>
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

    
    </section>
  );
}

export default Hero