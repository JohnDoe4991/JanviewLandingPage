import ArrowIcon from '@/assets/arrow-right.svg';
import CogImage from '@/assets/cog.png';
import Image from 'next/image';

export const Hero = () => {
  return (
  <section>
<div className="container">
  <div>
    <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
    Version 2.0 is here
    </div>
    <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
      Pathway to productivity
      </h1>
    <p className="text-xl text-[#3E68A3] tracking-tight mt-6">
      Your ultimate platform for driving business success, with an app tailored to track your progress, inspire your efforts, and celebrate your achievements.
       Janview provides complete transparency and equips you with all the essential tools to efficiently manage and scale your business.
       </p>
       <div className="flex gap-1 items-center mt-[30px]">
        <button className="btn btn-primary">Get for free</button>
        <button className="btn btn-text gap-1">
          <span>Learn more</span>
          <ArrowIcon className="h-5 w-5"/>
          </button>
       </div>
  </div>
  <div className="mt-20">
    <Image src={CogImage} alt="Cog image" />
  </div>
</div>
  </section>
  );
};
