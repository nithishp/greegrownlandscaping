import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PreviousProjects from "@/components/PreviousProjects";
import VerticalSlideFeatures from "@/components/VerticalSlideFeature";
import CampCarousel from "@/components/CampCarousel";
import Hero1 from "@/components/Hero1";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <Hero1/>
      <Camp />
      <Guide />
      <CampCarousel/>
      {/* <Services /> */}
      {/* <VerticalSlideFeatures /> */}
      <PreviousProjects />

      {/* <Features /> */}
      <GetApp />
    </>
  );
}
