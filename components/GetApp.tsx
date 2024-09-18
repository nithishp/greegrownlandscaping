import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]" id='getapp'>
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Get in Touch!</h2>
          <p className="regular-18 text-gray-10">
            Ready to create your dream landscape?
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="Call Us"
              icon="/call-bold.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="Mail Us"
              icon="/mail.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/3d-landscape-2.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
}

export default GetApp