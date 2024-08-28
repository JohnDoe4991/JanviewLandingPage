import productImage from '@/assets/BusinessMetrics.png';
import pyramidImage from '@/assets/pyramid.png'
import tubeImage from '@/assets/tube.png'
import UnitFranchise from '@/assets/unitFrachises.png'
import Image from 'next/image';

export const ProductShowcase = () => {
  return (
<section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-16 overflow-x-clip">
  <div className="container">
    <div className="max-w-[540px] mx-auto">
    <div className="flex justify-center">
<div className="tag">Boost your productivity with Janview</div>
</div>
<h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5 ">
  A more effective way to track progress</h2>
<p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
  Janview helps you track progress,
  collaborate with your team, and manage tasks more efficiently.
  </p>
  </div>
  <div className="relative">
  <Image src={productImage} alt="Product Image" className="mt-10 mb-10" />
  <Image src={pyramidImage}
  alt="Pyramid Image"
  height={220}
  width={220}
  className="hidden md:block absolute -right-36 -top-32" />
  <Image src={tubeImage}
  alt="Tube Image"
  height={220}
  className="hidden md:block absolute bottom-24 -left-36" />
  <div className="max-w-[540px] mx-auto">
    <div className="flex justify-center">
<div className="tag">Convenient and comprehensive, all in one location.</div>
</div>
<h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5 ">
Maintain a close connection with your clients.</h2>
<p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
Janview centralizes essential business information and resources, providing everything you need to efficiently manage operations and streamline processes.
It helps you track progress, collaborate with your team, and access all necessary forms and documents, ensuring your business runs smoothly.
  </p>
  </div>
   <Image src={UnitFranchise} alt="Product Image" className="mt-10" />
  </div>
  </div>
</section>
  )
};
