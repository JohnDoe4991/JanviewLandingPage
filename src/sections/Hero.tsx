"use client";
import ArrowIcon from '@/assets/arrow-right.svg';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
target: heroRef,
offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);


  return (
  <section id="hero" ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
<div className="container">
  <div className="md:flex items-center">
  <div className="md:w-[478px]">
    <div className="tag">
    Version 2.0 is here
    </div>
    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
      Pathway to Productivity
      </h1>
    <p className="text-xl text-white tracking-tight mt-6">
    Your ultimate platform for driving business success, with an app tailored to streamline operations,
     enhance financial control, and foster growth.
     Janview provides complete transparency and equips you with all the essential tools to efficiently manage and scale your business.
       </p>
       <div className="flex gap-1 items-center mt-[30px]">
       <a
                href="#contact"
                className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight"
              >
                Get Started
              </a>
              <a href="#janview" className="btn btn-text gap-1">
  <span>Learn more</span>
  <ArrowIcon className="h-5 w-5"/>
</a>

       </div>
  </div>
  </div>
</div>
  </section>
  );
};
