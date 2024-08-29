"use client";
import jantizeLogo from '../assets/jantize_logo.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-center lg:justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: ["0%", "-50%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* First set of logos */}
            <div className="flex gap-14 lg:gap-20">
              <Image src={jantizeLogo} alt="Jantize Logo" className="logo-ticker-image" />
              <Image src={jantizeLogo} alt="Jantize Logo" className="logo-ticker-image" />
              <Image src={jantizeLogo} alt="Jantize Logo" className="logo-ticker-image" />
              <Image src={jantizeLogo} alt="Jantize Logo" className="logo-ticker-image" />
              <Image src={jantizeLogo} alt="Jantize Logo" className="logo-ticker-image" />
              <Image src={jantizeLogo} alt="Jantize Logo" className="logo-ticker-image" />
            </div>

            {/* Duplicate set of logos */}
            <div className="flex gap-14 lg:gap-20">
              <Image src={jantizeLogo} alt="Jantize Logo" className="logo-ticker-image" />
              <Image src={jantizeLogo} alt="Jantize Logo" className="logo-ticker-image" />
              <Image src={jantizeLogo} alt="Jantize Logo" className="logo-ticker-image" />
              <Image src={jantizeLogo} alt="Jantize Logo" className="logo-ticker-image" />
              <Image src={jantizeLogo} alt="Jantize Logo" className="logo-ticker-image" />
              <Image src={jantizeLogo} alt="Jantize Logo" className="logo-ticker-image" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
