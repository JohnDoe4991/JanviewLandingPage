"use client";
import ArrowRight from '@/assets/arrow-right.svg';
import starImage from '@/assets/star.png';
import springImage from '@/assets/spring.png';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className='section-heading relative'>
          <h2 className="section-title">Sign up and see where Janview can take you</h2>
          <p className="product-description mt-5">
            Achieve New Heights with Janview. Start your journey with our user plan and experience the power of a tool designed to motivate and drive results. As you set and exceed your goals,
            effortlessly add your team to scale your success. For tailored solutions and advanced features, our sales team is always ready to assist.
          </p>
          <motion.div
            className="absolute -left-[350px] top-[-137px]"
            style={{ translateY }}
          >
            <Image src={starImage} alt="Star Image" width={360} height={360} layout="intrinsic" />
          </motion.div>
          <motion.div
            className="absolute -right-[331px] top-[19px]"
            style={{ translateY }}
          >
            <Image src={springImage} alt="Spring Image" width={360} height={360} layout="intrinsic" />
          </motion.div>
        </div>
        <div className="flex gap-2 mt-10 justify-center">
        <a
                href="#contact"
                className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight"
              >
                Get Started
              </a>
              <a href="#janview" className="btn btn-text gap-1">
  <span>Learn more</span>
  <ArrowRight className="h-5 w-5"/>
</a>
        </div>
      </div>
    </section>
  )
};
