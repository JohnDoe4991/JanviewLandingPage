import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Janview } from "@/sections/Janview";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Pricing } from "@/sections/Pricing";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { ScrollToTop } from "@/sections/ScrollToTop";
import { Contact } from "@/sections/Contact";
import { Tools } from "@/sections/Tools";

export default function Home() {
  return <>
    <Header />
    <ScrollToTop />
    <Hero />
    <Janview />
    <Tools />
    <ProductShowcase />
    <Pricing />
    <Testimonials />
    <CallToAction />
    {/* <LogoTicker/> */}
    <Contact />
    <Footer />
  </>;
}
