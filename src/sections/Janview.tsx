"use client"
import Image from 'next/image';
import searchImg from '@/assets/search.png';
import moneyDataImg from '@/assets/money_data.png';
import calendarImg from '@/assets/calendar.png';
import invoiceImg from '@/assets/invoice.png';
import workGearDocImg from '@/assets/work_gear_doc.png';

export const Janview = () => {
  return (
    <div id="features" className="bg-gray-100 px-5 py-20 flex flex-col space-y-10 lg:space-y-0 lg:flex-row items-stretch">
      <div className="flex-1 p-5 flex flex-col justify-center items-center bg-gray-100">
        <h2 className="text-gray-800 text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 text-center lg:text-left">
          "Janview Offers Complete Transparency And Equips You With All The Essential Tools To Successfully Manage And Grow Your Business."
        </h2>
        <p className="text-gray-600 text-base mb-6 text-center lg:text-left">
          Janview empowers businesses with real-time insights and streamlined operations, making it easier than ever to monitor progress and achieve goals.
          Whether you're managing a small team or scaling a larger enterprise, Janview's intuitive platform offers the tools you need to stay organized, foster collaboration, and make data-driven decisions.
          With robust features designed to adapt to your unique workflow, Janview ensures that every task is tracked, every project is on schedule, and every milestone is celebrated.
          Discover how Janview can transform your business and elevate your productivity.
        </p>
        <div className="mt-4">
          <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Request a Demo
          </a>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <a href="#visualize" className="bg-white p-4 text-center rounded-lg shadow-md hover:shadow-2xl hover:shadow-black/80 hover:scale-110 transform transition-transform duration-300 ease-in-out">
          <h3 className="text-blue-600 text-xl mb-2">1. Visualize</h3>
          <p className="text-gray-800 mb-4">Centralize key business data for quick, informed decisions.</p>
          <Image src={searchImg} alt="Visualize" className="mx-auto max-w-full h-auto border-2 border-gray-300 rounded-lg shadow-sm" />
        </a>
        <a href="#manage" className="bg-white p-4 text-center rounded-lg shadow-md hover:shadow-2xl hover:shadow-black/80 hover:scale-110 transform transition-transform duration-300 ease-in-out">
          <h3 className="text-blue-600 text-xl mb-2">2. Manage</h3>
          <p className="text-gray-800 mb-4">Streamline client data management, from invoicing to communication.</p>
          <Image src={moneyDataImg} alt="Manage" className="mx-auto max-w-full h-auto border-2 border-gray-300 rounded-lg shadow-sm" />
        </a>
        <a href="#reports" className="bg-white p-4 text-center rounded-lg shadow-md hover:shadow-2xl hover:shadow-black/80 hover:scale-110 transform transition-transform duration-300 ease-in-out">
          <h3 className="text-blue-600 text-xl mb-2">3. Reports</h3>
          <p className="text-gray-800 mb-4">Access detailed reports anytime to stay informed on key metrics.</p>
          <Image src={calendarImg} alt="Reports" className="mx-auto max-w-full h-auto border-2 border-gray-300 rounded-lg shadow-sm" />
        </a>
        <a href="#invoices" className="bg-white p-4 text-center rounded-lg shadow-md hover:shadow-2xl hover:shadow-black/80 hover:scale-110 transform transition-transform duration-300 ease-in-out">
          <h3 className="text-blue-600 text-xl mb-2">4. Invoices</h3>
          <p className="text-gray-800 mb-4">Easily handle invoices and financial details to minimize errors.</p>
          <Image src={invoiceImg} alt="Invoices" className="mx-auto max-w-full h-auto border-2 border-gray-300 rounded-lg shadow-sm" />
        </a>
        <a href="#logistics" className="bg-white p-4 text-center rounded-lg shadow-md hover:shadow-2xl hover:shadow-black/80 hover:scale-110 transform transition-transform duration-300 ease-in-out">
          <h3 className="text-blue-600 text-xl mb-2">5. Logistics</h3>
          <p className="text-gray-800 mb-4">Add customers, update billing, and manage logistics in one place.</p>
          <Image src={workGearDocImg} alt="Logistics" className="mx-auto max-w-full h-auto border-2 border-gray-300 rounded-lg shadow-sm" />
        </a>
      </div>
    </div>
  );
};
