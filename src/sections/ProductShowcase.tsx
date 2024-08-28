import productImage from '@/assets/BusinessMetrics.png';
import Image from 'next/image';

export const ProductShowcase = () => {
  return (
<section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24">
  <div className="container">
    <div className="flex justify-center">
<div className="tag">Boost your productivity with Janview</div>
</div>
<h2 className="text-center text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text ">
  A more effective way to track progress</h2>
<p className="text-center [#3E68A3]">
  Janview is a project management tool that helps you track progress,
  collaborate with your team, and manage tasks more efficiently.
  </p>
  <Image src={productImage} alt="Product Image" className="" />
  </div>
</section>
  )
};
