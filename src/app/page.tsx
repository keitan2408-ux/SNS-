import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Solution from "@/components/Solution";
import Services from "@/components/Services";
import AiWorkflow from "@/components/AiWorkflow";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import About from "@/components/About";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Problems />
        <Solution />
        <Services />
        <AiWorkflow />
        <Benefits />
        <Pricing />
        <Faq />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
