"use client";
import avatar2 from "@/assets/avatar-2.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";

const testimonials = [
  {
    text: "Janview has completely changed how I manage my business. The QuickBooks integration alone saves me hours every week.",
    imageSrc: avatar2,
    name: "Jamie Rivera",
    username: "@jamiebizleader",
  },
  {
    text: "As a small business owner, Janview puts everything I need in one place—bookkeeping, task management, client info—done.",
    imageSrc: avatar2,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "I used to juggle five different apps just to keep up. Janview does it all—and I can finally focus on growth, not admin.",
    imageSrc: avatar2,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "We onboarded Janview and within a week our workflow was 10x smoother. The dashboard alone is worth it.",
    imageSrc: avatar2,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Janview makes running day-to-day operations seamless. Invoicing, scheduling, financials—it’s all synced and streamlined.",
    imageSrc: avatar2,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The QuickBooks sync is spot-on. I don’t have to jump between tools anymore—Janview keeps my finances and ops in check.",
    imageSrc: avatar2,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Janview brings clarity to our chaos. It’s helped our team communicate better and made my reporting far easier.",
    imageSrc: avatar2,
    name: "Jordan Patel",
    username: "@jpatelsbiz",
  },
  {
    text: "We use Janview for everything from payroll tracking to route planning. It’s simple, powerful, and saves us time.",
    imageSrc: avatar2,
    name: "Sam Dawson",
    username: "@dawsonproductivity",
  },
  {
    text: "It feels like Janview was built for business owners like me. Finally a tool that just works and understands what I need.",
    imageSrc: avatar2,
    name: "Casey Harper",
    username: "@caseyharperbiz",
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{ translateY: "-50%" }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, imageSrc, name, username }) => (
            <div className="bg-[#1B1B1B] border border-[#333333] text-[#F5F5F5] p-6 rounded-xl shadow-lg">
              <div className="text-sm leading-relaxed">{text}</div>
              <div className="flex items-center gap-3 mt-5">
                <Image
                  src={imageSrc}
                  alt={name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full border border-[#6C6C6C]"
                />
                <div className="flex flex-col">
                  <div className="font-semibold text-white leading-5">{name}</div>
                  <div className="text-[#B3B3B3] text-sm leading-5">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-[#0F0F0F] py-20">
      <div className="container">
        <div className="section-heading text-center">
          <div className="flex justify-center">
            <div className="tag bg-[#D0D961] text-black px-4 py-1 rounded-full font-semibold text-sm">
              Testimonials
            </div>
          </div>
          <h2 className="section-title mt-5 text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-br from-white via-[#D0D961] to-white bg-clip-text text-transparent">
            What Our Users Are Saying
          </h2>
          <p className="product-description mt-5 text-[#B3B3B3] max-w-2xl mx-auto">
            Users worldwide are impressed by the robust features and unparalleled
            efficiency that Janview delivers.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
