"use client"
import Image from 'next/image';
import searchImg from '@/assets/search.png';
import moneyDataImg from '@/assets/money_data.png';
import calendarImg from '@/assets/calendar.png';
import invoiceImg from '@/assets/invoice.png';
import workGearDocImg from '@/assets/work_gear_doc.png';

export const Janview = () => {
  return (
    <div className="bg-gray-100 px-5 py-20 flex flex-col space-y-10 lg:space-y-0 lg:flex-row items-stretch">
      <div className="flex-1 p-5 flex flex-col justify-center items-center bg-gray-100">
        <h2 className="text-gray-800 text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 text-center lg:text-left">
          Janview offers complete transparency and equips you with all the essential tools to successfully manage and grow your franchise.
        </h2>
        <p className="text-gray-600 text-base mb-6 text-center lg:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="mt-4">
          <button onClick={() => window.location.href='https://janviewpro.com/#'} className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Request a Demo
          </button>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Increased gap */}
        <div className="bg-white p-4 text-center rounded-lg shadow-md hover:shadow-xl hover:scale-110 transform transition-transform duration-300 ease-in-out">
          <h3 className="text-blue-600 text-xl mb-2">1. Visualize</h3>
          <p className="text-gray-800 mb-4">Monitor key information to track your growth</p>
          <Image src={searchImg} alt="Visualize" className="mx-auto max-w-full h-auto border-2 border-gray-300 rounded-lg shadow-sm" />
        </div>
        <div className="bg-white p-4 text-center rounded-lg shadow-md hover:shadow-xl hover:scale-110 transform transition-transform duration-300 ease-in-out">
          <h3 className="text-blue-600 text-xl mb-2">2. Manage</h3>
          <p className="text-gray-800 mb-4">Manage all customer data</p>
          <Image src={moneyDataImg} alt="Manage" className="mx-auto max-w-full h-auto border-2 border-gray-300 rounded-lg shadow-sm" />
        </div>
        <div className="bg-white p-4 text-center rounded-lg shadow-md hover:shadow-xl hover:scale-110 transform transition-transform duration-300 ease-in-out">
          <h3 className="text-blue-600 text-xl mb-2">3. Reports</h3>
          <p className="text-gray-800 mb-4">Create daily reports available 24/7/365</p>
          <Image src={calendarImg} alt="Reports" className="mx-auto max-w-full h-auto border-2 border-gray-300 rounded-lg shadow-sm" />
        </div>
        <div className="bg-white p-4 text-center rounded-lg shadow-md hover:shadow-xl hover:scale-110 transform transition-transform duration-300 ease-in-out">
          <h3 className="text-blue-600 text-xl mb-2">4. Invoices</h3>
          <p className="text-gray-800 mb-4">View invoices loans and fee details</p>
          <Image src={invoiceImg} alt="Invoices" className="mx-auto max-w-full h-auto border-2 border-gray-300 rounded-lg shadow-sm" />
        </div>
        <div className="bg-white p-4 text-center rounded-lg shadow-md hover:shadow-xl hover:scale-110 transform transition-transform duration-300 ease-in-out">
          <h3 className="text-blue-600 text-xl mb-2">5. Logistics</h3>
          <p className="text-gray-800 mb-4">Add Customers, Billing changes, and more...</p>
          <Image src={workGearDocImg} alt="Logistics" className="mx-auto max-w-full h-auto border-2 border-gray-300 rounded-lg shadow-sm" />
        </div>
      </div>
    </div>
  );
};
