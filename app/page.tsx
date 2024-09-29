import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PreviousProjects from "@/components/PreviousProjects";
import VerticalSlideFeatures from "@/components/VerticalSlideFeature";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Services />
      <VerticalSlideFeatures />
      <PreviousProjects />

      {/* <Features /> */}
      <GetApp />
    </>
  );
}
