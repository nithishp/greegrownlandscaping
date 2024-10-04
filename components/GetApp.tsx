'use client'
import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  const handleCall = () => {
    window.location.href = 'tel:+61430309424'; // Replace with the actual phone number
  };

  const handleMail = () => {
    window.location.href = 'mailto:info@greengrowlandscape.com.au'; // Replace with the actual email address
  };
  return (
    <section className="flexCenter w-full flex-col pb-[100px]" id='getapp'>
      <div className="get-app">
        <div className="z-9 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Get in Touch!</h2>
          <p className="regular-18 text-gray-10">
            Ready to create your dream landscape?
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="Call us"
              icon="/call-bold.svg"
              variant="btn_white hover:bg-neutral-200 duration-300"
              full
              handleClick={handleCall}
            />
            <Button
              type="button"
              title="E-mail us"
              icon="/mail.svg"
              variant="btn_dark_green_outline hover:bg-green-90/90 duration-300"
              full
              handleClick={handleMail}
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/contactimage.png" alt="phones" width={550} height={870} className='hover:scale-110 duration-300' />
        </div>
      </div>
    </section>
  );
}

export default GetApp