import jantizeLogo from '../assets/jantize_logo.png';
import Image from 'next/image';

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container mx-auto"> 
        <div className="flex justify-center lg:justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-wrap justify-center lg:gap-20"> {/* Center the logos in large screens */}
            <Image src={jantizeLogo} alt="Jantize Logo" className="logo-ticker-image" />
            <Image src={jantizeLogo} alt="Jantize Logo" className="logo-ticker-image" />
            <Image src={jantizeLogo} alt="Jantize Logo" className="logo-ticker-image" />
            <Image src={jantizeLogo} alt="Jantize Logo" className="logo-ticker-image" />
            <Image src={jantizeLogo} alt="Jantize Logo" className="logo-ticker-image" />
            <Image src={jantizeLogo} alt="Jantize Logo" className="logo-ticker-image" />
          </div>
        </div>
      </div>
    </div>
  );
};
