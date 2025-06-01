"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import BarChart from '@/assets/BarChart.png';
import Customers from '@/assets/Customers.png';
import DashBoard from '@/assets/DashBoard.png';
import LineChart from '@/assets/LineChart.png';
import Logistics from '@/assets/Logisticss.png';
import Image from 'next/image';
import { useRef } from 'react';

const splitTextIntoWords = (text: string) => {
  return text.split(' ').map((word, index) => (
    <span
      key={index}
      className="inline-block mr-1 hover:text-[#D0D961] transition-colors duration-200"
    >
      {word}
    </span>
  ));
};

export const Tools = () => {
  const visualizeRef = useRef(null);
  const manageRef = useRef(null);
  const reportsRef = useRef(null);
  const invoicesRef = useRef(null);
  const logisticsRef = useRef(null);

  const useSectionAnimation = (ref: any) => {
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start 70%", "end 30%"],
    });
    return {
      slideInLeft: useTransform(scrollYProgress, [0, 0.5], [-30, 0]),
      slideInRight: useTransform(scrollYProgress, [0, 0.5], [30, 0]),
      opacity: useTransform(scrollYProgress, [0, 0.5], [0, 1]),
    };
  };


  const viz = useSectionAnimation(visualizeRef);
  const manage = useSectionAnimation(manageRef);
  const reports = useSectionAnimation(reportsRef);
  const invoices = useSectionAnimation(invoicesRef);
  const logistics = useSectionAnimation(logisticsRef);

  const sections = [
    {
      id: "visualize",
      ref: visualizeRef,
      title: "Visualize",
      text1: "Get a clear picture of your business operations with real-time data visualization.",
      text2: "Whether it's tracking sales, monitoring progress, or managing team performance, Janview's visual tools keep you on top of it all, ensuring nothing gets missed.",
      image: DashBoard,
      anim: viz
    },
    {
      id: "manage",
      ref: manageRef,
      title: "Manage",
      text1: "Stay organized and streamline client data management with Janview. From invoicing to client communication, our management tools make it easy to stay on top of customer needs.",
      text2: "Efficiently handle customer databases, view interactions, and maintain smooth communications—all from one platform.",
      image: Customers,
      anim: manage
    },
    {
      id: "reports",
      ref: reportsRef,
      title: "Reports",
      text1: "Access detailed reports at any time to stay informed on key metrics. Generate visual summaries of financials, project progress, or client accounts in just a few clicks.",
      text2: "Use our flexible reporting tools to pull data across your organization, enabling you to forecast trends, compare performance, and drive data-driven decisions.",
      image: BarChart,
      anim: reports
    },
    {
      id: "invoices",
      ref: invoicesRef,
      title: "Invoices",
      text1: "Easily manage and generate invoices. Janview simplifies financial handling, helping you avoid errors and track payments with ease.",
      text2: "Automate invoicing, set up reminders, and track payments in real-time to ensure your business stays financially healthy.",
      image: LineChart,
      anim: invoices
    },
    {
      id: "logistics",
      ref: logisticsRef,
      title: "Logistics",
      text1: "Add new customers, update billing details, and manage logistics all from one central place. Janview's comprehensive logistics management features ensure your operations run smoothly.",
      text2: "Stay on top of transportation, delivery schedules, inventory management, and more with an intuitive platform designed for efficiency.",
      image: Logistics,
      anim: logistics
    },
  ];

  return (
    <div id="tools" className="py-20 bg-gradient-to-br from-[#1F1F1F] via-[#0F0F0F] to-black overflow-x-clip px-5 space-y-16">
      {sections.map(({ id, ref, title, text1, text2, image, anim }) => (
        <div
          id={id}
          key={id}
          ref={ref}
          className="flex flex-col md:flex-row items-center bg-[#1B1B1B] p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <motion.div
            style={{ x: anim.slideInLeft, opacity: anim.opacity }}
            className="flex-1 mb-6 md:mb-0 md:mr-6"
          >
            <h3 className="text-3xl font-bold tracking-tight bg-gradient-to-br from-white via-[#D0D961] to-white text-transparent bg-clip-text text-center mb-4">
              {title}
            </h3>
            <p className="text-[#E6E6E6] mb-4 leading-relaxed text-lg">
              {splitTextIntoWords(text1)}
            </p>
            <p className="text-[#B3B3B3] leading-relaxed text-base">
              {splitTextIntoWords(text2)}
            </p>
          </motion.div>

          <motion.div
            style={{ x: anim.slideInRight, opacity: anim.opacity }}
            className="flex-1"
          >
            <Image src={image} alt={`${title} Illustration`} className="rounded-lg shadow-md mx-auto max-w-full h-auto" />
          </motion.div>
        </div>
      ))}
    </div>
  );
};
