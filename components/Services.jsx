'use client'
import Image from "next/image";
import VerticalSlideFeatures from "./VerticalSlideFeature";

const Services = () => {
const FEATURES1 = [
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
const FEATURES2 = [
  {
    title: "Concrete",
    url: "https://cloud.appwrite.io/v1/storage/buckets/66f786c6000a3554aa84/files/66f851df002e0d1ad641/view?project=66e977dc0033bd164c43&project=66e977dc0033bd164c43&mode=admin",
    text: "Enhance your outdoor space with our professionally laid concrete, perfect for driveways, patios, and walkways. Our team delivers durable, long-lasting concrete solutions that withstand heavy use. Choose from various finishes and styles to match your landscape design.",
  },
  {
    title: "Driveways",
    url: "https://cloud.appwrite.io/v1/storage/buckets/66f786c6000a3554aa84/files/66f786fa002a0f79f77c/view?project=66e977dc0033bd164c43&project=66e977dc0033bd164c43&mode=admin",
    text: "Create a lasting impression with our beautifully crafted driveways, combining functionality and aesthetic appeal. Our experts lay concrete or other materials to ensure durability and visual impact. Enhance your home's curb appeal with our custom driveway solutions.",
  },
];
const FEATURES3 = [
  {
    title: "Synthetic Grass",
    url: "https://cloud.appwrite.io/v1/storage/buckets/66f786c6000a3554aa84/files/66f7870d00091e20e98f/view?project=66e977dc0033bd164c43&project=66e977dc0033bd164c43&mode=admin",
    text: "Enjoy lush, low-maintenance lawns with our premium synthetic grass solutions, perfect for families and pets.Our synthetic turf is durable, eco-friendly, and resistant to weather conditions. Transform your outdoor space into a vibrant, hassle-free zone.",
  },
  {
    title: "Irrigation for Lawns and Garden",
    url: "https://cloud.appwrite.io/v1/storage/buckets/66f786c6000a3554aa84/files/66f7876b0002b95db37e/view?project=66e977dc0033bd164c43&project=66e977dc0033bd164c43&mode=admin",
    text: "Optimize water usage and nurture your landscape with our efficient irrigation systems, designed for lawns and gardens. Our experts install and maintain systems ensuring healthy plant growth and water conservation. Automate your watering needs with our innovative solutions.",
  },
];
const FEATURES4 = [
  {
    title: "Garden Lights",
    url: "https://cloud.appwrite.io/v1/storage/buckets/66e97c69000b317e4d5b/files/66f624760005c9175cef/view?project=66e977dc0033bd164c43&project=66e977dc0033bd164c43&mode=admin",
    text: "Illuminate your landscape's beauty with our expertly designed garden lighting solutions, highlighting key features and ambiance. Our energy-efficient options enhance safety, visibility, and aesthetic appeal. Choose from various styles and designs to match your landscape.",
  },
  {
    title: "Water Feature and Waterfalls",
    url: "https://cloud.appwrite.io/v1/storage/buckets/66e97c69000b317e4d5b/files/66f6247c003e6408838a/view?project=66e977dc0033bd164c43&project=66e977dc0033bd164c43&mode=admin",
    text: "Create serene, breathtaking spaces with our custom water features and waterfalls, adding visual and auditory charm. Our experts design and install unique, low-maintenance solutions that enhance your landscape's tranquility. Transform your outdoor space into a relaxing oasis",
  },
  
];
const FEATURES5 = [
  {
    title: "Color Bond Fencing",
    url: "https://cloud.appwrite.io/v1/storage/buckets/66f786c6000a3554aa84/files/66f787350023a5a698f7/view?project=66e977dc0033bd164c43&project=66e977dc0033bd164c43&mode=admin",
    text: "Color Bond Fencing provides a sleek, durable, and modern fencing solution for your property. Available in a variety of colors, it offers excellent resistance to weather conditions and corrosion, ensuring privacy, security, and low maintenance.",
  },
  {
    title: "Louvered Fencing",
    url: "https://cloud.appwrite.io/v1/storage/buckets/66f786c6000a3554aa84/files/66f853b30004c0323a3b/view?project=66e977dc0033bd164c43&project=66e977dc0033bd164c43&mode=admin",
    text: "Louvered Fencing combines privacy with airflow and light, making it ideal for gardens, patios, and pool areas. The slat design allows for a contemporary look while maintaining a sense of openness and comfort. Fully customizable to match your style.",
  },
];


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

          <div className="">
            <div>
              <h3 className="bold-20 lg:bold-32 ">Outdoor Structures</h3>
              <p className="mt-3 text-lg text-gray-50 max-w-lg ">
                Enhance the functionality and aesthetic appeal of your outdoor
                space with our expertly crafted outdoor structures.
              </p>
              <VerticalSlideFeatures features={FEATURES1} />
            </div>
          </div>

          {/* feature-2 */}
          <div className="">
            <div>
              <h3 className="bold-20 lg:bold-32 ">Hardscapes</h3>
              <p className="mt-3 text-lg text-gray-50 max-w-lg ">
                Transform your outdoor environment with our hardscape services,
                designed to provide both beauty and durability.
              </p>
              <VerticalSlideFeatures features={FEATURES2} />
            </div>
          </div>

          {/* feature-3 */}

          <div className="">
            <div>
              <h3 className="bold-20 lg:bold-32 ">Lawn and Garden Solutions</h3>
              <p className="mt-3 text-lg text-gray-50 max-w-lg ">
                Want to take your lawn and garden to the next level? We offer a range of solutions to enhance your outdoor space.
              </p>
              <VerticalSlideFeatures features={FEATURES3} />
            </div>
          </div>

          {/* feature-5  */}
          <div className="">
            <div>
              <h3 className="bold-20 lg:bold-32 ">
                Fencing
              </h3>
              <p className="mt-3 text-lg text-gray-50 max-w-lg ">
                Secure your property and enhance its privacy with our fencing solutions, available in various styles and materials.
              </p>
              <VerticalSlideFeatures features={FEATURES5} />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Services;
