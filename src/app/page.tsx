import {Header} from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Janview } from "@/sections/Janview";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Pricing } from "@/sections/Pricing";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";

export default function Home() {
  return <>
  <Header/>
  <Hero/>
  <Janview/>
  <LogoTicker/>
  <ProductShowcase/>
  <Pricing/>
  <Testimonials/>
  <CallToAction/>
  </> ;
}
