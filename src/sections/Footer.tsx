import Logo from '@/assets/jvp-logo.png';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
        <Image src={Logo} height={40} alt="SaaS Logo" className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Customers</a>
          <a href="#contact">Contact</a>
        </nav>
        <p className="mt-6">&copy; 2024 Janview, Inc. All rights reserved</p>
        </div>
    </footer>
  );
};
