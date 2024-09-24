import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PreviousProjects from "@/components/PreviousProjects";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Services/>
      <PreviousProjects/>
      {/* <Features /> */}
      <GetApp />
    </>
  )
}
