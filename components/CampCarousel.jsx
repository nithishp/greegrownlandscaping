'use client'
import React, { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CampCarousel = () => {
  const FEATURE_GROUPS = [
    {
      title: "Outdoor Structures",
      description: "Enhance the functionality and aesthetic appeal of your outdoor space with our expertly crafted outdoor structures.",
      titleLeft:true,
      features: [
        {
          title: "Decking",
          url: "https://cloud.appwrite.io/v1/storage/buckets/66e97c69000b317e4d5b/files/66f624760005c9175cef/view?project=66e977dc0033bd164c43&project=66e977dc0033bd164c43&mode=admin",
          text: "Elevate your outdoor living space with our beautifully crafted decks, perfect for relaxation and entertainment. Our expert team designs and builds durable decks with Eco and timber that complement your home's architecture. Choose from various materials and styles to suit your taste and budget.",
        },
        {
          title: "Retaining Walls",
          url: "https://cloud.appwrite.io/v1/storage/buckets/66e97c69000b317e4d5b/files/66f6247c003e6408838a/view?project=66e977dc0033bd164c43&project=66e977dc0033bd164c43&mode=admin",
          text: "Our retaining wall solutions such as Rendered Retaining Walls and Split Space are engineered to withstand environmental elements while enhancing your landscape's aesthetic appeal.",
        },
        {
          title: "Wall Paneling",
          url: "https://cloud.appwrite.io/v1/storage/buckets/66f786c6000a3554aa84/files/66f851c000355b4cd98e/view?project=66e977dc0033bd164c43&project=66e977dc0033bd164c43&mode=admin",
          text: "Transform your outdoor spaces with our stunning wall paneling solutions, adding texture and visual interest. Our panels are crafted from high-quality materials, ensuring durability and low maintenance.",
        },
      ],
    },
    {
      title: "Hardscapes",
      description: "Transform your outdoor environment with our hardscape services, designed to provide both beauty and durability.",
      titleLeft:false,
      features: [
        {
          title: "Concrete",
          url: "https://cloud.appwrite.io/v1/storage/buckets/66f786c6000a3554aa84/files/66f851df002e0d1ad641/view?project=66e977dc0033bd164c43&project=66e977dc0033bd164c43&mode=admin",
          text: "Enhance your outdoor space with our professionally laid concrete, perfect for driveways, patios, and walkways. Our team delivers durable, long-lasting concrete solutions that withstand heavy use.",
        },
        {
          title: "Driveways",
          url: "https://cloud.appwrite.io/v1/storage/buckets/66f786c6000a3554aa84/files/66f786fa002a0f79f77c/view?project=66e977dc0033bd164c43&project=66e977dc0033bd164c43&mode=admin",
          text: "Create a lasting impression with our beautifully crafted driveways, combining functionality and aesthetic appeal. Our experts lay concrete or other materials to ensure durability and visual impact.",
        },
      ],
    },
    {
      title: "Lawn and Garden Solutions",
      description: "Want to take your lawn and garden to the next level? We offer a range of solutions to enhance your outdoor space.",
      titleLeft:true,
      features: [
        {
          title: "Synthetic Grass",
          url: "https://cloud.appwrite.io/v1/storage/buckets/66f786c6000a3554aa84/files/66f7870d00091e20e98f/view?project=66e977dc0033bd164c43&project=66e977dc0033bd164c43&mode=admin",
          text: "Enjoy lush, low-maintenance lawns with our premium synthetic grass solutions, perfect for families and pets. Our synthetic turf is durable, eco-friendly, and resistant to weather conditions.",
        },
        {
          title: "Irrigation for Lawns and Garden",
          url: "https://cloud.appwrite.io/v1/storage/buckets/66f786c6000a3554aa84/files/66f7876b0002b95db37e/view?project=66e977dc0033bd164c43&project=66e977dc0033bd164c43&mode=admin",
          text: "Optimize water usage and nurture your landscape with our efficient irrigation systems, designed for lawns and gardens. Our experts install and maintain systems ensuring healthy plant growth and water conservation.",
        },
      ],
    },
    {
      title: "Fencing",
      description: "Secure your property and enhance its privacy with our fencing solutions, available in various styles and materials.",
      titleLeft:false,
      features: [
        {
          title: "Color Bond Fencing",
          url: "https://cloud.appwrite.io/v1/storage/buckets/66f786c6000a3554aa84/files/66f787350023a5a698f7/view?project=66e977dc0033bd164c43&project=66e977dc0033bd164c43&mode=admin",
          text: "Color Bond Fencing provides a sleek, durable, and modern fencing solution for your property. Available in a variety of colors, it offers excellent resistance to weather conditions and corrosion, ensuring privacy, security, and low maintenance.",
        },
        {
          title: "Louvered Fencing",
          url: "https://cloud.appwrite.io/v1/storage/buckets/66f786c6000a3554aa84/files/66f853b30004c0323a3b/view?project=66e977dc0033bd164c43&project=66e977dc0033bd164c43&mode=admin",
          text: "Louvered Fencing combines privacy with airflow and light, making it ideal for gardens, patios, and pool areas. The slat design allows for a contemporary look while maintaining a sense of openness and comfort.",
        },
      ],
    },
  ];
  

  return (
    <section className="2xl:max-container px-5 relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20" id="camp">
      <div className="mb-5 lg:mb-10">
        <h2 className="bold-40 lg:bold-64 text-center">Our Services</h2>
        <p className="max-w-3xl mx-auto text-xl text-center uppercase regular-18 -mt-1 mb-3 text-green-50">
          What we offer to our clients
        </p>
      </div>

      {FEATURE_GROUPS.map((group, groupIndex) => (
        <div key={groupIndex}>
          <div className={`mb-5 lg:bg-green-50 rounded-2xl self-center lg:w-max p-5 lg:-mb-10 lg:ml-14 z-10`}>
            <h3 className="bold-20 lg:bold-32 lg:text-white">{group.title}</h3>
            <p className="regular-16 xl:text-left text-gray-30 lg:text-neutral-200 xl:max-w-[520px]">
              {group.description}
            </p>
          </div>

          <Carousel className="lg:mb-5">
            <CarouselContent>
              {group.features.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
                    <CampSite backgroundImage={slide.url} />
                  </div>

                  <div className={`${group.titleLeft ? 'flexEnd':'flexStart'} mt-10 px-6 lg:${index % 2 === 0 ? "-mt-60 lg:mr-6" : "-mt-60 lg:ml-6"}`}>
                    <div className="bg-green-50/75 hover:bg-green-50 duration-300 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
                      <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
                        <strong>{slide.title}</strong>
                      </h2>
                      <p className="regular-14 xl:regular-16 mt-5 text-white">{slide.text}</p>
                      <Image src="/quote.svg" alt="quote" width={186} height={219} className="camp-quote" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-green-50 hover:bg-green-50/80 text-white hover:text-white" />
            <CarouselNext className="bg-green-50 hover:bg-green-50/80 text-white hover:text-white" />
          </Carousel>
        </div>
      ))}
    </section>
  );
};

const CampSite = ({ backgroundImage }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);  
  };

  return (
    <div className={`h-full w-full lg:rounded-r-5xl 2xl:rounded-5xl`}>
      {loading && (
        <div className="h-full w-full bg-gray-200  rounded-xl lg:rounded-r-5xl 2xl:rounded-5xl" />
      )}
      <Image
        src={backgroundImage}
        alt="image"
        width={100}
        height={100}
        onLoad={handleImageLoad}
        className={`h-full w-full object-cover md:object-cover object-center rounded-xl lg:rounded-r-5xl 2xl:rounded-5xl `}
      />
    </div>
  );
};
export default CampCarousel;
