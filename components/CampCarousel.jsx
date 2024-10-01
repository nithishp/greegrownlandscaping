import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CampCarousel = () => {
    const slides = [
      {
        title: "Decking",
        url: "https://cloud.appwrite.io/v1/storage/buckets/66e97c69000b317e4d5b/files/66f624760005c9175cef/view?project=66e977dc0033bd164c43&project=66e977dc0033bd164c43&mode=admin",
        text: "Elevate your outdoor living space with our beautifully crafted decks, perfect for relaxation and entertainment. Our expert team designs and builds durable decks with Eco and timber that complement your home's architecture. Choose from various materials and styles to suit your taste and budget.",
      },
      {
        title: "Retaining Walls",
        url: "https://cloud.appwrite.io/v1/storage/buckets/66e97c69000b317e4d5b/files/66f6247c003e6408838a/view?project=66e977dc0033bd164c43&project=66e977dc0033bd164c43&mode=admin",
        text: "Our retaining wall solutions such as Rendered Retaining Walls and Split Space are engineered to withstand environmental elements while enhancing your landscape's aesthetic appeal. We construct walls using various materials, from timber to concrete, to address erosion and create usable space. Our experts ensure stability, durability, and visual appeal.",
      },
      {
        title: "Wall Paneling",
        url: "https://cloud.appwrite.io/v1/storage/buckets/66f786c6000a3554aa84/files/66f851c000355b4cd98e/view?project=66e977dc0033bd164c43&project=66e977dc0033bd164c43&mode=admin",
        text: "Transform your outdoor spaces with our stunning wall paneling solutions, adding texture and visual interest. Our panels are crafted from high-quality materials, ensuring durability and low maintenance. Enhance your landscape's beauty with our expert installation services.",
      },
    ];
  return (
    <section
      className="2xl:max-container px-4 relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20"
      id="camp"
    >
      <div className="mb-5 lg:mb-10">
        <h2 className="bold-40 lg:bold-64 text-center">Our Services</h2>
        <p className="max-w-3xl mx-auto  text-xl text-center uppercase regular-18 -mt-1 mb-3 text-green-50 ">
          What we offer to our clients
        </p>
      </div>
      <div className="mb-5 lg:mb-10">
        <h3 className="bold-20 lg:bold-32 ">Outdoor Structures</h3>
        <p className="regular-16 xl:text-left text-gray-30 xl:max-w-[520px] ">
          Enhance the functionality and aesthetic appeal of your outdoor space
          with our expertly crafted outdoor structures.
        </p>
      </div>
      <Carousel>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
                <CampSite
                  backgroundImage={slide.url}
                  title={slide.title}
                  subtitle={slide.subtitle}
                  text={slide.text}
                />
              </div>

              <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
                <div className="bg-green-50/75 hover:bg-green-50 duration-300 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
                  <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
                    <strong>{slide.title}</strong>
                  </h2>
                  <p className="regular-14 xl:regular-16 mt-5 text-white">
                    {slide.text}
                  </p>
                  <Image
                    src="/quote.svg"
                    alt="quote"
                    width={186}
                    height={219}
                    className="camp-quote"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-green-50 hover:bg-green-50/80 text-white hover:text-white" />
        <CarouselNext className="bg-green-50 hover:bg-green-50/80 text-white hover:text-white" />
      </Carousel>
    </section>
  );
};

const CampSite = ({ backgroundImage }) => {
  return (
    <div
      className={`h-full w-full lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <Image
        src={backgroundImage}
        alt="image"
        width={100}
        height={100}
        className="h-full w-full object-cover md:object-cover object-center rounded-xl   lg:rounded-r-5xl 2xl:rounded-5xl"
      />
    </div>
  );
};

export default CampCarousel;
