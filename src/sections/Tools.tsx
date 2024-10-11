import BarChart from '@/assets/BarChart.png';
import Customers from '@/assets/Customers.png';
import DashBoard from '@/assets/DashBoard.png';
import LineChart from '@/assets/LineChart.png';
import Logistics from '@/assets/Logisticss.png';
import Image from 'next/image';

export const Tools = () => {
  return (
<div id="tools" className="py-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#EAEEFE,#183EC2_100%)] overflow-x-clip px-5 space-y-16">
{/* Visualize Section */}
      <div id="visualize" className="flex flex-col md:flex-row items-center bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
        <div className="flex-1 mb-6 md:mb-0 md:mr-6">
          <h3 className="text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text text-center mb-4">Visualize</h3>
          <p className="text-white mb-4">
            Get a clear picture of your business operations with real-time data visualization. Our dashboard lets you centralize key business metrics, helping you make quick, informed decisions.
          </p>
          <p className="text-[#f0f0f0]">
            Whether it's tracking sales, monitoring progress, or managing team performance, Janview's visual tools keep you on top of it all, ensuring nothing gets missed.
          </p>
        </div>
        <div className="flex-1">
          <Image src={DashBoard} alt="Dashboard" className="rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Manage Section */}
      <div id="manage" className="flex flex-col md:flex-row items-center bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
        <div className="flex-1 mb-6 md:mb-0 md:mr-6 ">
          <h3 className="text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text text-center mb-4">Manage</h3>
          <p className="text-white mb-4">
            Stay organized and streamline client data management with Janview. From invoicing to client communication, our management tools make it easy to stay on top of customer needs.
          </p>
          <p className="text-[#f0f0f0]">
            Efficiently handle customer databases, view interactions, and maintain smooth communications—all from one platform.
          </p>
        </div>
        <div className="flex-1">
          <Image src={Customers} alt="Customers Management" className="rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Reports Section */}
      <div id="reports" className="flex flex-col md:flex-row items-center bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
        <div className="flex-1 mb-6 md:mb-0 md:mr-6">
          <h3 className="text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text text-center mb-4">Reports</h3>
          <p className="text-white mb-4">
            Access detailed reports at any time to stay informed on key metrics. Generate visual summaries of financials, project progress, or client accounts in just a few clicks.
          </p>
          <p className="text-[#f0f0f0]">
            Use our flexible reporting tools to pull data across your organization, enabling you to forecast trends, compare performance, and drive data-driven decisions.
          </p>
        </div>
        <div className="flex-1">
          <Image src={BarChart} alt="Reports and Data" className="rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Invoices Section */}
      <div id="invoices" className="flex flex-col md:flex-row items-center bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
        <div className="flex-1 mb-6 md:mb-0 md:mr-6">
          <h3 className="text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text text-center mb-4">Invoices</h3>
          <p className="text-gray-600 mb-4">
            Easily manage and generate invoices. Janview simplifies financial handling, helping you avoid errors and track payments with ease.
          </p>
          <p className="text-gray">
            Automate invoicing, set up reminders, and track payments in real-time to ensure your business stays financially healthy.
          </p>
        </div>
        <div className="flex-1">
          <Image src={LineChart} alt="Invoices and Billing" className="rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Logistics Section */}
      <div id="logistics" className="flex flex-col md:flex-row items-center bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
        <div className="flex-1 mb-6 md:mb-0 md:mr-6 ">
          <h3 className="text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text text-center mb-4">Logistics</h3>
          <p className="text-gray-600 mb-4">
            Add new customers, update billing details, and manage logistics all from one central place. Janview's comprehensive logistics management features ensure your operations run smoothly.
          </p>
          <p className="text-gray">
            Stay on top of transportation, delivery schedules, inventory management, and more with an intuitive platform designed for efficiency.
          </p>
        </div>
        <div className="flex-1">
          <Image src={Logistics} alt="Logistics Management" className="rounded-lg shadow-lg lg:ml-auto lg:mr-auto" />
        </div>
      </div>
    </div>
  );
};
