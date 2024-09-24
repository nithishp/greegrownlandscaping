import Image from "next/image";

const Services = () => {
  return (
    <div>
      <section className="">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="bold-40 lg:bold-64 text-center">Our Services</h2>
            <p className="max-w-3xl mx-auto  text-xl text-center uppercase regular-18 -mt-1 mb-3 text-green-50 ">
              What we offer to our clients
            </p>
          </div>

          {/* feature-1 */}

          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="bold-20 lg:bold-32 ">Outdoor Structures</h3>
              <p className="mt-3 text-lg text-gray-50 ">
                Enhance the functionality and aesthetic appeal of your outdoor
                space with our expertly crafted outdoor structures.
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#30af5b] text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi bold-20 ">
                      Decking
                    </h4>
                    <p className="mt-2 regular-16 text-gray-30 ">
                      Elevate your outdoor living space with our beautifully
                      crafted decks, perfect for relaxation and entertainment.
                      Our expert team designs and builds durable decks that
                      complement your home's architecture. Choose from various
                      materials and styles to suit your taste and budget.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#30af5b] text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="bold-20 leadi bold-20 ">Retaining Walls</h4>
                    <p className="mt-2 regular-16 text-gray-30 ">
                      Our retaining wall solutions are engineered to withstand
                      environmental elements while enhancing your landscape's
                      aesthetic appeal. We construct walls using various
                      materials, from timber to concrete, to address erosion and
                      create usable space. Our experts ensure stability,
                      durability, and visual appeal.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#30af5b] text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi bold-20 ">
                      Wall Paneling
                    </h4>
                    <p className="mt-2 regular-16 text-gray-30 ">
                      Transform your outdoor spaces with our stunning wall
                      paneling solutions, adding texture and visual interest.
                      Our panels are crafted from high-quality materials,
                      ensuring durability and low maintenance. Enhance your
                      landscape's beauty with our expert installation services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <Image
                height={500}
                width={800}
                src="/section-1.jpg"
                alt=""
                className="mx-auto rounded-lg shadow-lg bg-gray-500 object-bottom object-cover"
              />
            </div>
          </div>

          {/* feature-2 */}

          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold tracki sm:text-3xl ">
                  Hardscapes
                </h3>
                <p className="mt-3 text-lg text-gray-50 ">
                  Transform your outdoor environment with our hardscape
                  services, designed to provide both beauty and durability.
                </p>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#30af5b] text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi bold-20 ">
                        Concrete
                      </h4>
                      <p className="mt-2 regular-16 text-gray-30 ">
                        Enhance your outdoor space with our professionally laid
                        concrete, perfect for driveways, patios, and walkways.
                        Our team delivers durable, long-lasting concrete
                        solutions that withstand heavy use. Choose from various
                        finishes and styles to match your landscape design.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#30af5b] text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi bold-20 ">
                        Driveways
                      </h4>
                      <p className="mt-2 regular-16 text-gray-30 ">
                        Create a lasting impression with our beautifully crafted
                        driveways, combining functionality and aesthetic appeal.
                        Our experts lay concrete or other materials to ensure
                        durability and visual impact. Enhance your home's curb
                        appeal with our custom driveway solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <Image
                  height={500}
                  width={800}
                  src="/section-2.jpg"
                  alt=""
                  className="mx-auto rounded-lg shadow-lg bg-gray-500 object-top object-cover"
                />
              </div>
            </div>
          </div>
          {/* feature-3 */}

          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold tracki sm:text-3xl ">
                Lawn and Garden Solutions
              </h3>
              <p className="mt-3 text-lg text-gray-50 ">
                Achieve a vibrant, low-maintenance landscape with our lawn and
                garden services.
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#30af5b] text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi bold-20 ">
                      Synthetic Grass
                    </h4>
                    <p className="mt-2 regular-16 text-gray-30 ">
                      Enjoy lush, low-maintenance lawns with our premium
                      synthetic grass solutions, perfect for families and
                      pets.Our synthetic turf is durable, eco-friendly, and
                      resistant to weather conditions. Transform your outdoor
                      space into a vibrant, hassle-free zone.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#30af5b] text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi bold-20 ">
                      Irrigation for Lawns and Garden
                    </h4>
                    <p className="mt-2 regular-16 text-gray-30 ">
                      Optimize water usage and nurture your landscape with our
                      efficient irrigation systems, designed for lawns and
                      gardens. Our experts install and maintain systems ensuring
                      healthy plant growth and water conservation. Automate your
                      watering needs with our innovative solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <Image
                height={500}
                width={800}
                src="section-3.jpg"
                alt=""
                className="mx-auto rounded-lg shadow-lg bg-gray-500 object-top object-cover"
              />
            </div>
          </div>
          {/* feature-4  */}

          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold tracki sm:text-3xl ">
                  Lighting and Water Features
                </h3>
                <p className="mt-3 text-lg text-gray-50 ">
                  Add a touch of elegance and serenity to your landscape with
                  our custom lighting and water features.
                </p>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#30af5b] text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi bold-20 ">
                        Garden Lights
                      </h4>
                      <p className="mt-2 regular-16 text-gray-30 ">
                        Illuminate your landscape's beauty with our expertly
                        designed garden lighting solutions, highlighting key
                        features and ambiance. Our energy-efficient options
                        enhance safety, visibility, and aesthetic appeal. Choose
                        from various styles and designs to match your landscape.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#30af5b] text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi bold-20 ">
                        Water Feature and Waterfalls
                      </h4>
                      <p className="mt-2 regular-16 text-gray-30 ">
                        Create serene, breathtaking spaces with our custom water
                        features and waterfalls, adding visual and auditory
                        charm. Our experts design and install unique,
                        low-maintenance solutions that enhance your landscape's
                        tranquility. Transform your outdoor space into a
                        relaxing oasis
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <Image
                  height={500}
                  width={800}
                  src="/section-4.jpg"
                  alt=""
                  className="mx-auto rounded-lg shadow-lg bg-gray-500 object-top object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
