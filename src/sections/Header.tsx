"use client";
import { useState } from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/jvp-logo.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="top-0 z-20 backdrop-blur-sm">

      <div className="flex justify-center items-center py-3 bg-gradient-to-r from-[#3a3a3a] via-[#1e1e1e] to-black text-white text-sm gap-3">

        <p className="hidden md:block bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
          Streamline your workflow and boost your productivity
        </p>

        <a href="#contact" className="inline-flex gap-1 items-center cursor-pointer hover:underline">
          <p>Get started</p>
          <ArrowRight className="w-4 h-4 inline-flex justify-center items-center" />
        </a>

      </div>


      <div className="py-5 bg-[#0F0F0F] text-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">

            <Image src={Logo} alt="Janview Logo" height={48} width={160} className="h-auto w-auto" />

            {/* Mobile Menu Icon */}
            <MenuIcon
              className="w-6 h-6 md:hidden cursor-pointer text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-6 items-center text-[#B3B3B3]">
              <a href="#features" onClick={handleNavClick} className="hover:text-white transition">
                Features
              </a>
              <a href="#pricing" onClick={handleNavClick} className="hover:text-white transition">
                Pricing
              </a>
              <a href="#testimonials" onClick={handleNavClick} className="hover:text-white transition">
                Customers
              </a>
              <a href="#contact" onClick={handleNavClick} className="hover:text-white transition">
                Contact
              </a>

              {/* Primary CTA */}
              <a
                href="#contact"
                onClick={handleNavClick}
                className="bg-[#D0D961] text-black px-4 py-2 rounded-full font-medium hover:bg-[#c4cb56] transition shadow-sm"
              >
                Get Started
              </a>

              {/* Login Link */}
              <a
                href="https://janviewpro.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1F1F1F] text-white px-4 py-2 rounded-full font-medium hover:bg-[#333333] transition"
              >
                Login
              </a>
            </nav>

            {/* Mobile Nav Dropdown */}
            {isMenuOpen && (
              <div className="absolute top-20 right-4 bg-[#1B1B1B] mt-2 p-4 md:hidden z-10 rounded-lg shadow-md w-52 text-white">
                <nav className="flex flex-col gap-3">
                  <a href="#features" onClick={handleNavClick} className="hover:text-[#D0D961] transition">
                    Features
                  </a>
                  <a href="#pricing" onClick={handleNavClick} className="hover:text-[#D0D961] transition">
                    Pricing
                  </a>
                  <a href="#testimonials" onClick={handleNavClick} className="hover:text-[#D0D961] transition">
                    Customers
                  </a>
                  <a href="#contact" onClick={handleNavClick} className="hover:text-[#D0D961] transition">
                    Contact
                  </a>
                  <a
                    href="#contact"
                    onClick={handleNavClick}
                    className="bg-[#D0D961] text-black px-4 py-2 rounded-full text-center font-medium hover:bg-[#c4cb56] transition"
                  >
                    Get Started
                  </a>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>

    </header>
  );
};
