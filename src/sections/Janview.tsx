"use client";
import Image from 'next/image';
import searchImg from '@/assets/search.png';
import moneyDataImg from '@/assets/money_data.png';
import calendarImg from '@/assets/calendar.png';
import invoiceImg from '@/assets/invoice.png';
import workGearDocImg from '@/assets/work_gear_doc.png';

export const Janview = () => {
  return (
    <div id="features" className="bg-gradient-to-r from-[#F5F5F5] via-[#E6E6E6] to-[#DADADA] px-5 py-20 flex flex-col space-y-10 lg:space-y-0 lg:flex-row items-stretch">
      <div className="flex-1 p-8 flex flex-col justify-center items-center">
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-center lg:text-left bg-gradient-to-br from-black via-[#1B1B1B] to-[#333] text-transparent bg-clip-text leading-tight mb-6"
          style={{
            WebkitTextFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            lineHeight: '1.15',
            paddingBottom: '0.2em',
          }}
        >
          Janview empowers your growth.
        </h2>


        <p className="text-[#1F1F1F] text-lg md:text-xl font-medium leading-relaxed text-center lg:text-left">
          Janview offers <span className="font-bold text-black">complete transparency</span> and equips you with all the essential tools to manage and grow your business effortlessly.
          Whether you're managing a small team or scaling up, our intuitive platform keeps you focused, aligned, and productive.
        </p>

        <p className="text-[#6C6C6C] text-base mt-4 text-center lg:text-left leading-relaxed">
          From real-time insights to workflow automation, Janview adapts to your operations —
          <span className="text-[#000000] font-semibold"> ensuring every task is tracked, every milestone celebrated, and your team always on course.</span>
        </p>

        <div className="mt-8">
          <a
            href="#contact"
            className="bg-[#F5E327] text-black px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#e9d900] transition"
          >
            Request a Demo
          </a>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { id: "visualize", title: "1. Visualize", text: "Centralize key business data for quick, informed decisions.", img: searchImg },
          { id: "manage", title: "2. Manage", text: "Streamline client data management, from invoicing to communication.", img: moneyDataImg },
          { id: "reports", title: "3. Reports", text: "Access detailed reports anytime to stay informed on key metrics.", img: calendarImg },
          { id: "invoices", title: "4. Invoices", text: "Easily handle invoices and financial details to minimize errors.", img: invoiceImg },
          { id: "logistics", title: "5. Logistics", text: "Add customers, update billing, and manage logistics in one place.", img: workGearDocImg },
        ].map(({ id, title, text, img }) => (
          <a
            key={id}
            href={`#${id}`}
            className="bg-white p-4 text-center rounded-lg shadow-md hover:shadow-2xl hover:shadow-black/80 hover:scale-110 transform transition-transform duration-300 ease-in-out"
          >
            <h3 className="text-[#000000] text-xl font-semibold mb-2">{title}</h3>
            <p className="text-[#333333] text-sm mb-4">{text}</p>
            <Image
              src={img}
              alt={title}
              className="mx-auto max-w-full h-auto border-2 border-gray-300 rounded-lg shadow-sm"
            />
          </a>
        ))}
      </div>
    </div>
  );
};
