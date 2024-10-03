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
    <section className="max-container padding-container flex flex-col  gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row" id='hero' style={{backgroundImage: "url('/curve-bg.png')"}}>
      <div className='flex flex-row' />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">
          Transform <br /> <span className="text-[#30af5b]">Green</span> Paradise
        </h1>
        <p className="regular-16 mt-6 mb-6 text-gray-30 xl:max-w-[520px]">
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

          <p className="bold-16 lg:bold-20 text-blue-70">
            2K
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

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
        <div>

        <img src='/hero-bg.svg' className='object-contain w-[80%] h-[80%] hidden xl:flex '  />
        </div>

    
    </section>
  );
}

export default Hero