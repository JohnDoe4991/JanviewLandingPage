"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import BarChart from '@/assets/BarChart.png';
import Customers from '@/assets/Customers.png';
import DashBoard from '@/assets/DashBoard.png';
import LineChart from '@/assets/LineChart.png';
import Logistics from '@/assets/Logisticss.png';
import Image from 'next/image';
import { useRef } from 'react';


const splitTextIntoWords = (text) => {
  return text.split(' ').map((word, index) => (
    <span key={index} className="word-zoom inline-block mr-1 hover:scale-110 transition-transform duration-200">{word}</span>
  ));
};

export const Tools = () => {

  const visualizeRef = useRef(null);
  const manageRef = useRef(null);
  const reportsRef = useRef(null);
  const invoicesRef = useRef(null);
  const logisticsRef = useRef(null);

  const { scrollYProgress: scrollVisualize } = useScroll({
    target: visualizeRef,
    offset: ["start 70%", "end 30%"],
  });

  const { scrollYProgress: scrollManage } = useScroll({
    target: manageRef,
    offset: ["start 70%", "end 30%"],
  });

  const { scrollYProgress: scrollReports } = useScroll({
    target: reportsRef,
    offset: ["start 70%", "end 30%"],
  });

  const { scrollYProgress: scrollInvoices } = useScroll({
    target: invoicesRef,
    offset: ["start 70%", "end 30%"],
  });

  const { scrollYProgress: scrollLogistics } = useScroll({
    target: logisticsRef,
    offset: ["start 70%", "end 30%"],
  });

  const slideInLeft = useTransform(scrollVisualize, [0, 0.5], [-100, 0]);
  const slideInRight = useTransform(scrollVisualize, [0, 0.5], [100, 0]);
  const opacityVisualize = useTransform(scrollVisualize, [0, 0.5], [0, 1]);

  const slideInLeftManage = useTransform(scrollManage, [0, 0.5], [-100, 0]);
  const slideInRightManage = useTransform(scrollManage, [0, 0.5], [100, 0]);
  const opacityManage = useTransform(scrollManage, [0, 0.5], [0, 1]);

  const slideInLeftReports = useTransform(scrollReports, [0, 0.5], [-100, 0]);
  const slideInRightReports = useTransform(scrollReports, [0, 0.5], [100, 0]);
  const opacityReports = useTransform(scrollReports, [0, 0.5], [0, 1]);

  const slideInLeftInvoices = useTransform(scrollInvoices, [0, 0.5], [-100, 0]);
  const slideInRightInvoices = useTransform(scrollInvoices, [0, 0.5], [100, 0]);
  const opacityInvoices = useTransform(scrollInvoices, [0, 0.5], [0, 1]);

  const slideInLeftLogistics = useTransform(scrollLogistics, [0, 0.5], [-100, 0]);
  const slideInRightLogistics = useTransform(scrollLogistics, [0, 0.5], [100, 0]);
  const opacityLogistics = useTransform(scrollLogistics, [0, 0.5], [0, 1]);

  return (
    <div id="tools" className="py-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#EAEEFE,#183EC2_100%)] overflow-x-clip px-5 space-y-16">

      {/* Visualize Section */}
      <div id="visualize" ref={visualizeRef} className="flex flex-col md:flex-row items-center bg-white bg-opacity-20 p-6 rounded-lg shadow-lg pulse-on-click">
        <motion.div
          style={{ x: slideInLeft, opacity: opacityVisualize }}
          className="flex-1 mb-6 md:mb-0 md:mr-6"
        >
          <h3 className="text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text text-center mb-4">Visualize</h3>
          <p className="text-white mb-4">
            {splitTextIntoWords("Get a clear picture of your business operations with real-time data visualization.")}
          </p>
          <p className="text-[#f0f0f0]">
            {splitTextIntoWords("Whether it's tracking sales, monitoring progress, or managing team performance, Janview's visual tools keep you on top of it all, ensuring nothing gets missed.")}
          </p>
        </motion.div>
        <motion.div
          style={{ x: slideInRight, opacity: opacityVisualize }}
          className="flex-1"
        >
          <Image src={DashBoard} alt="Dashboard" className="rounded-lg shadow-lg" />
        </motion.div>
      </div>

      {/* Manage Section */}
      <div id="manage" ref={manageRef} className="flex flex-col md:flex-row items-center bg-white bg-opacity-20 p-6 rounded-lg shadow-lg pulse-on-click">
        <motion.div
          style={{ x: slideInLeftManage, opacity: opacityManage }}
          className="flex-1 mb-6 md:mb-0 md:mr-6"
        >
          <h3 className="text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text text-center mb-4">Manage</h3>
          <p className="text-white mb-4">
            {splitTextIntoWords("Stay organized and streamline client data management with Janview. From invoicing to client communication, our management tools make it easy to stay on top of customer needs.")}
          </p>
          <p className="text-[#f0f0f0]">
            {splitTextIntoWords("Efficiently handle customer databases, view interactions, and maintain smooth communications—all from one platform.")}
          </p>
        </motion.div>
        <motion.div
          style={{ x: slideInRightManage, opacity: opacityManage }}
          className="flex-1"
        >
          <Image src={Customers} alt="Customers Management" className="rounded-lg shadow-lg" />
        </motion.div>
      </div>

      {/* Reports Section */}
      <div id="reports" ref={reportsRef} className="flex flex-col md:flex-row items-center bg-white bg-opacity-20 p-6 rounded-lg shadow-lg pulse-on-click">
        <motion.div
          style={{ x: slideInLeftReports, opacity: opacityReports }}
          className="flex-1 mb-6 md:mb-0 md:mr-6"
        >
          <h3 className="text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text text-center mb-4">Reports</h3>
          <p className="text-white mb-4">
            {splitTextIntoWords("Access detailed reports at any time to stay informed on key metrics. Generate visual summaries of financials, project progress, or client accounts in just a few clicks.")}
          </p>
          <p className="text-[#f0f0f0]">
            {splitTextIntoWords("Use our flexible reporting tools to pull data across your organization, enabling you to forecast trends, compare performance, and drive data-driven decisions.")}
          </p>
        </motion.div>
        <motion.div
          style={{ x: slideInRightReports, opacity: opacityReports }}
          className="flex-1"
        >
          <Image src={BarChart} alt="Reports and Data" className="rounded-lg shadow-lg" />
        </motion.div>
      </div>

      {/* Invoices Section */}
      <div id="invoices" ref={invoicesRef} className="flex flex-col md:flex-row items-center bg-white bg-opacity-20 p-6 rounded-lg shadow-lg pulse-on-click">
        <motion.div
          style={{ x: slideInLeftInvoices, opacity: opacityInvoices }}
          className="flex-1 mb-6 md:mb-0 md:mr-6"
        >
          <h3 className="text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text text-center mb-4">Invoices</h3>
          <p className="text-gray-600 mb-4">
            {splitTextIntoWords("Easily manage and generate invoices. Janview simplifies financial handling, helping you avoid errors and track payments with ease.")}
          </p>
          <p className="text-gray">
            {splitTextIntoWords("Automate invoicing, set up reminders, and track payments in real-time to ensure your business stays financially healthy.")}
          </p>
        </motion.div>
        <motion.div
          style={{ x: slideInRightInvoices, opacity: opacityInvoices }}
          className="flex-1"
        >
          <Image src={LineChart} alt="Invoices and Billing" className="rounded-lg shadow-lg" />
        </motion.div>
      </div>

      {/* Logistics Section */}
      <div id="logistics" ref={logisticsRef} className="flex flex-col md:flex-row items-center bg-white bg-opacity-20 p-6 rounded-lg shadow-lg pulse-on-click">
        <motion.div
          style={{ x: slideInLeftLogistics, opacity: opacityLogistics }}
          className="flex-1 mb-6 md:mb-0 md:mr-6"
        >
          <h3 className="text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text text-center mb-4">Logistics</h3>
          <p className="text-gray-600 mb-4">
            {splitTextIntoWords("Add new customers, update billing details, and manage logistics all from one central place. Janview's comprehensive logistics management features ensure your operations run smoothly.")}
          </p>
          <p className="text-gray">
            {splitTextIntoWords("Stay on top of transportation, delivery schedules, inventory management, and more with an intuitive platform designed for efficiency.")}
          </p>
        </motion.div>
        <motion.div
          style={{ x: slideInRightLogistics, opacity: opacityLogistics }}
          className="flex-1"
        >
          <Image src={Logistics} alt="Logistics Management" className="rounded-lg shadow-lg lg:ml-auto lg:mr-auto" />
        </motion.div>
      </div>
    </div>
  );
};
