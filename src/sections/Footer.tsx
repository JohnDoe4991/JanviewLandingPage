import Logo from '@/assets/jvp-logo.png';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-[#B3B3B3] text-sm py-10 text-center border-t border-[#333]">
      <div className="container">
        <Image src={Logo} height={40} alt="Janview Logo" className="mx-auto" />
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6 font-medium text-sm tracking-tight">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#testimonials" className="hover:text-white transition">Customers</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
        </nav>
        <p className="mt-6 text-xs text-[#6C6C6C]">&copy; 2024 Janview, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
