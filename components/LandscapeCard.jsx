import React from 'react'

const LandscapeCard = () => {
  return (
    <div
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1720048169970-9c651cf17ccd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8)`,
        backgroundPosition: "center",
      }}
      className="outline-card flex aspect-square w-full flex-col justify-end overflow-hidden rounded-lg bg-neutral-400 bg-[size:100%] shadow-xl shadow-neutral-900/30 transition-[background-size] duration-500 hover:bg-[size:110%]"
    >
      <div className="pointer-events-none flex items-center justify-between bg-gradient-to-t from-black to-black/0 p-6 pt-8 text-xl font-medium text-white md:text-2xl">
        <h3>Titel</h3>
        {/* <FiArrowRight /> */}
      </div>
    </div>
  );
}

export default LandscapeCard