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
    <section ref={sectionRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-16 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity with Janview</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="product-description mt-5">
            Janview helps you track progress, collaborate with your team, and manage tasks more efficiently.
          </p>
        </div>
        <div className="relative">
          <Image
            ref={productRef}
            src={productImage}
            alt="Product Image"
            className="mt-10 mb-10 transform transition duration-500 ease-in-out scale-75 opacity-0"
          />
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid Image"
            height={250}
            width={250}
            className="hidden md:block absolute -right-36 -top-32"
            style={{ translateY }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube Image"
            height={220}
            width={220}
            className="hidden md:block absolute bottom-24 -left-36 z-20"
            style={{ translateY }}
          />
          <div className="max-w-[540px] mx-auto">
            <div className="flex justify-center">
              <div className="tag">Convenient and comprehensive, all in one location.</div>
            </div>
            <h2 className="section-title mt-5">
              Maintain a close connection with your clients.
            </h2>
            <p className="product-description mt-5">
              Janview centralizes essential business information and resources, providing everything you need to efficiently manage operations and streamline processes.
            </p>
          </div>
          <Image
            ref={franchiseRef}
            src={UnitFranchise}
            alt="Product Image"
            className="mt-10 transform transition duration-500 ease-in-out scale-75 opacity-0 z-10"
          />
        </div>
      </div>
    </section>
  );
};
