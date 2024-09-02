"use client";
import jantizeLogo from '@/assets/jantize_logo.png';
import crossFit from "@/assets/CrossFitOakRidge.png"
import parish from "@/assets/PTC.png"
import joeHudson from "@/assets/JoeHudson.png"
import flatIron from "@/assets/FlatIron.png"
import barber from "@/assets/VsBarber.png"
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
              <Image src={crossFit} alt="Crossfit Logo" className="logo-ticker-image" />
              <Image src={parish} alt="Parish Logo" className="logo-ticker-image" />
              <Image src={joeHudson} alt="JoeHudson Logo" className="logo-ticker-image" />
              <Image src={flatIron} alt="FlatIron Logo" className="logo-ticker-image" />
              <Image src={barber} alt="VBarber Logo" className="logo-ticker-image" />
            </div>

            {/* Duplicate set of logos */}
            <div className="flex gap-14 lg:gap-20">
              <Image src={jantizeLogo} alt="Jantize Logo" className="logo-ticker-image" />
              <Image src={crossFit} alt="Crossfit Logo" className="logo-ticker-image" />
              <Image src={parish} alt="Parish Logo" className="logo-ticker-image" />
              <Image src={joeHudson} alt="JoeHudson Logo" className="logo-ticker-image" />
              <Image src={flatIron} alt="FlatIron Logo" className="logo-ticker-image" />
              <Image src={barber} alt="VBarber Logo" className="logo-ticker-image" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
