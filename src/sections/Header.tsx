"use client";
import { useState, useEffect } from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/jvp-logo.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (event.clientY < window.innerHeight * 0.1) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleNavClick = () => {
    setVisible(false);
  };

  return (
    <header
      className={`sticky top-0 z-20 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } backdrop-blur-sm`}
    >
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
            <MenuIcon className="w-5 h-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#hero" onClick={handleNavClick}>
                About
              </a>
              <a href="#features" onClick={handleNavClick}>
                Features
              </a>
              <a href="#pricing" onClick={handleNavClick}>
                Pricing
              </a>
              <a href="#testimonials" onClick={handleNavClick}>
                Customers
              </a>
              <a href="#footer" onClick={handleNavClick}>
                Help
              </a>
              <button
                onClick={() => {
                  handleNavClick();
                  window.location.href = "https://janviewpro.com/#";
                }}
                className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight"
              >
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
