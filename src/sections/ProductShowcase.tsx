"use client";
import { useEffect, useRef } from 'react';
import productImage from '@/assets/BusinessMetrics.png';
import pyramidImage from '@/assets/pyramid.png';
import tubeImage from '@/assets/tube.png';
import UnitFranchise from '@/assets/unitFrachises.png';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const productRef = useRef(null);
  const franchiseRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (productRef.current) {
      observer.observe(productRef.current);
    }

    if (franchiseRef.current) {
      observer.observe(franchiseRef.current);
    }

    return () => {
      if (productRef.current) observer.unobserve(productRef.current);
      if (franchiseRef.current) observer.unobserve(franchiseRef.current);
    };
  }, []);

  return (
    <section  ref={sectionRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-16 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity with Janview</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="product-description mt-5">
          Janview helps you monitor progress, collaborate with your team, and manage tasks more efficiently, ensuring every aspect of your business runs smoothly.
          </p>
        </div>
        <div className="relative">
          <motion.div
            className="mt-10 mb-10 transform transition duration-500 ease-in-out scale-50 opacity-0"
            ref={productRef}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image src={productImage} alt="Product Image" layout="intrinsic" />
          </motion.div>
          <motion.div
            className="hidden md:block absolute -right-36 -top-32"
            style={{ translateY }}
          >
            <Image src={pyramidImage} alt="Pyramid Image" width={250} height={250} layout="intrinsic" />
          </motion.div>
          <motion.div
            className="hidden md:block absolute bottom-24 -left-36"
            style={{ translateY }}
          >
            <Image src={tubeImage} alt="Tube Image" width={220} height={220} layout="intrinsic" />
          </motion.div>
          <div className="max-w-[540px] mx-auto">
            <div className="flex justify-center">
              <div className="tag">Convenient and comprehensive, all in one location.</div>
            </div>
            <h2 className="section-title mt-5">
              Maintain a close connection with your clients.
            </h2>
            <p className="product-description mt-5">
            Stay connected with your clients and your team by centralizing essential business information and resources in one easy-to-access platform.
            </p>
          </div>
          <motion.div
            className="mt-10 transform transition duration-500 ease-in-out scale-50 opacity-0"
            ref={franchiseRef}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image src={UnitFranchise} alt="Unit Franchise" layout="intrinsic" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
