"use client";

import ArrowIcon from "@/assets/arrow-right.svg";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Workflow from "@/assets/workflow.png";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="pt-16 pb-24 md:pt-20 md:pb-32 bg-gradient-to-br from-[#1B1B1B] to-[#000000] text-white overflow-x-clip"
    >
      <div className="container mx-auto px-4">
        <div className="md:flex items-center gap-12">
          <div className="md:w-[478px]">
            <div className="inline-block bg-[#1F1F1F] text-[#D0D961] text-sm font-semibold px-4 py-1 rounded-full uppercase tracking-wider">
              Version 2.0 is here
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mt-6 bg-gradient-to-br from-white via-[#D0D961] to-white text-transparent bg-clip-text">
              Pathway to Productivity
            </h1>

            <p className="text-lg text-[#B3B3B3] mt-6 leading-relaxed">
              Your ultimate platform for driving business success, with an app tailored to streamline operations,
              enhance financial control, and foster growth. <br />
              <span className="text-[#E6E6E6]">
                Janview provides complete transparency and equips you with all the essential tools to efficiently manage
                and scale your business.
              </span>
            </p>

            <div className="flex gap-4 items-center mt-10">
              <a
                href="#contact"
                className="bg-[#D0D961] text-black px-6 py-3 rounded-full font-semibold inline-flex items-center justify-center tracking-tight hover:bg-[#c4cb56] shadow-lg transition"
              >
                Get Started
              </a>
              <a
                href="#janview"
                className="text-[#D0D961] hover:underline text-base inline-flex items-center gap-1"
              >
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <motion.div
            className="hidden md:block md:flex-1"
            style={{ y: translateY }}
          >
            <Image
              src={Workflow}
              alt="Workflow Illustration"
              className="w-full max-w-[400px] border rounded-2xl h-auto mx-auto object-contain"
              priority
            />


          </motion.div>

        </div>
      </div>
    </section>
  );
};
