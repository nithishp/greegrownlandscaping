import React from 'react'
import LandscapeCard from '@/components/LandscapeCard'

const page = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Product Collection
          </h2>

          <p className="mt-4 max-w-md text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>

        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li>
            <div
              style={{
                backgroundImage: `url(https://5.imimg.com/data5/SELLER/Default/2020/11/LA/UG/JI/95153802/garden-landscaping-services-500x500.jpg)`,
                backgroundPosition: "center",
              }}
              className="outline-card flex aspect-square w-full flex-col justify-end overflow-hidden rounded-lg bg-neutral-400 bg-[size:100%] shadow-xl shadow-neutral-900/30 transition-[background-size] duration-500 hover:bg-[size:110%]"
            >
              <div className="pointer-events-none flex items-center justify-between bg-gradient-to-t from-black to-black/0 p-6 pt-8 text-xl font-medium text-white md:text-2xl">
                <h3>Title</h3>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default page