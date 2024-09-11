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

      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started</p>
          <ArrowRight className="w-4 h-4 inline-flex justify-center items-center" />
        </div>
      </div>


      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">

            <Image src={Logo} alt="Saas Logo" height={120} width={120} />


            <MenuIcon
              className="w-6 h-6 md:hidden cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />


            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#features" onClick={handleNavClick}>
                Features
              </a>
              <a href="#pricing" onClick={handleNavClick}>
                Pricing
              </a>
              <a href="#testimonials" onClick={handleNavClick}>
                Customers
              </a>
              <a href="#contact" onClick={handleNavClick}>
                Contact
              </a>
              <a
                href="#contact"
                onClick={handleNavClick}
                className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight"
              >
                Get Started
              </a>
            </nav>


            {isMenuOpen && (
                <div className="absolute top-20 right-0 bg-transparent mt-2 p-4 md:hidden z-10 rounded-lg w-max">
                  <nav className="flex flex-col items-end gap-3">
                    <a
                      href="#features"
                      onClick={handleNavClick}
                      className="text-black px-2 py-1 rounded cursor-pointer hover:shadow-md transition"
                    >
                      Features
                    </a>
                    <a
                      href="#pricing"
                      onClick={handleNavClick}
                      className="text-black px-2 py-1 rounded cursor-pointer hover:shadow-md transition"
                    >
                      Pricing
                    </a>
                    <a
                      href="#testimonials"
                      onClick={handleNavClick}
                      className="text-black px-2 py-1 rounded cursor-pointer hover:shadow-md transition"
                    >
                      Customers
                    </a>
                    <a
                      href="#contact"
                      onClick={handleNavClick}
                      className="text-black px-2 py-1 rounded cursor-pointer hover:shadow-md transition"
                    >
                      Contact
                    </a>
                    <a
                      href="#contact"
                      onClick={handleNavClick}
                      className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight w-full text-center hover:shadow-md transition sm:hidden"
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
