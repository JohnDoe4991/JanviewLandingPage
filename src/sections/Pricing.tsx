"use client";
import { FaCheck } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

const pricingTiers = [
  {
    title: "User",
    monthlyPrice: 0,
    description: "The User plan is ideal for individuals or small teams starting out. Perfect for managing projects efficiently at an affordable price.",
    buttonText: "Get started",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
      "Basic analytics",
      "Basic security features",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 0,
    description: "Everything included in User, plus: Priority support, advanced support, export support",
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
      "Advanced analytics",
      "Export capabilities",
      "Advanced security features",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 0,
    description: "Everything included in Pro, plus: Dedicated account manager, custom fields, advanced analytics, export capabilities, etc",
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Advanced analytics",
      "Export capabilities",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-20 bg-white text-black">
      <div id="pricing" className="container">
        <div className="section-heading text-center">
          <h2 className=" text-5xl font-bold tracking-tight">
            Pricing
          </h2>
          <p className="product-description mt-3 mb-8 text-[#333333] text-lg">
            Upgrade for unlimited tasks, better integrations, exclusive features, and more.
          </p>
        </div>

        <div className="flex flex-col gap-6 items-center mt-4 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({ title, monthlyPrice, description, buttonText, popular, inverse, features }) => (
              <div
                key={title}
                className={twMerge(
                  "w-full max-w-xs p-6 rounded-xl shadow-md transition-all duration-300",
                  inverse
                    ? "bg-black text-white border border-[#333333]"
                    : "bg-white text-[#1F1F1F] border border-[#E6E6E6]"
                )}
              >
                <div className="flex justify-between items-center">
                  <h3 className={twMerge("text-lg font-semibold", inverse ? "text-white/60" : "text-black/60")}>
                    {title}
                  </h3>
                  {popular && (
                    <div className="text-sm px-3 py-1 rounded-xl border border-[#D0D961] bg-black/90">
                      <motion.span
                        animate={{ backgroundPositionX: "100%" }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="bg-[linear-gradient(to_right,#D0D961,#F5F5F5,#D0D961)] [background-size:200%] text-transparent bg-clip-text font-medium"
                      >
                        Our Most Popular
                      </motion.span>
                    </div>
                  )}
                </div>

                <div className="flex items-baseline gap-1 mt-5">
                  <span className="text-3xl font-bold">${monthlyPrice}</span>
                  <span className={twMerge("font-medium", inverse ? "text-white/60" : "text-black/50")}>
                    / month
                  </span>
                </div>

                {description && (
                  <p className={twMerge("text-sm mt-3", inverse ? "text-white/80" : "text-[#6C6C6C]")}>
                    {description}
                  </p>
                )}

                <a
                  href="#contact"
                  className={twMerge(
                    "inline-block w-full text-center font-semibold rounded-full mt-5 py-2 transition",
                    inverse
                      ? "bg-white text-black hover:bg-[#F5F5F5]"
                      : "bg-[#F5E327] text-black hover:bg-[#e9d900] shadow"
                  )}
                >
                  {buttonText}
                </a>


                <ul className="flex flex-col gap-3 mt-6 text-sm">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <FaCheck className="text-[#F5E327] w-4 h-4" />
                      <span className={inverse ? "text-white" : "text-[#1F1F1F]"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                {popular && (
                  <div className="flex justify-center mt-5">
                    <motion.div
                      animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-xs px-3 py-1 rounded-xl border border-[#D0D961] text-[#D0D961] font-bold"
                    >
                      TOP SELLER
                    </motion.div>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
