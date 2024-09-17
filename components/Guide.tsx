import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col" id='guide'>
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          Your Vision, Our Expertise
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Nature Meets Imagination
          </h2>
          <p className="regular-18 text-gray-30 xl:max-w-[520px]">
            From the first sketch to the final plant, we’ll guide you through
            every step of the process. With a keen eye for detail and a passion
            for perfection, our team is dedicated to creating spaces that
            reflect your personality and lifestyle. If you can dream it, we can
            build it!
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/landscape-2.webp"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Small Project </p>
                <p className="bold-16 text-green-50 ml-8">40 min</p>
              </div>
              <p className="bold-20 mt-2">20 Yards</p>
            </div>

            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Large Project </p>
                <p className="bold-16 text-green-50 ml-8">3 hrs</p>
              </div>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                &#62; 100 yards
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Guide