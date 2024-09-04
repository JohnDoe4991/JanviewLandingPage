"use client";
import { FaCheck } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

const pricingTiers = [
  {
    title: "User",
    monthlyPrice: 100,
    description: null,
    buttonText: "Get started",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 1000,
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
    ],
  },
  {
    title: "Business",
    monthlyPrice: 2000,
    description: "Everything included in Pro, plus: Dedicated account manager, custom fields, advanced analytics, export capabilities, API access, advanced security features",
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-20 bg-white">
      <div id="pricing" className="container">
        <div className="section-heading">
        <h2 className="section-title">Pricing</h2>
        <p className="product-description mt-3">
          Upgrade for unlimited tasks, better integrations,
          exclusive features, and more.
        </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-4 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              description,
              buttonText,
              popular,
              inverse,
              features
            },) => (
<div
className={twMerge(
  "card p-6",
  inverse === true && "border-black bg-black text-white",
  "max-w-xs"
  )}
  >
  <div className="flex justify-between">
  <h3
   className={twMerge(
    "text-lg font-bold text-black/50",
  inverse === true && "text-white/60"
  )}
  >
    {title}
    </h3>
  {popular === true && (
  <div className="inline-flex text-sm px-3 py-1 rounded-xl border border-white/20">
  <motion.span
  animate={{
    backgroundPositionX: "100%",
  }}
  transition={{
    duration: 1,
    repeat: Infinity,
    ease: "linear",
    repeatType: "loop",
  }}
  className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium">
    Our Most Popular
    </motion.span>
  </div>
  )}
  </div>
  <div className="flex items-baseline gap-1 mt-5">
  <span className="text-3xl font-bold tracking-tighter leading-none">
    ${monthlyPrice}
  </span>
  <span
    className={twMerge(
      "tracking-tight font-bold",
      inverse === true ? "text-white/60" : "text-black/50"
    )}
  >
    / month
  </span>
</div>

<div>
                  {description && (
                    <p
                      className={twMerge(
                        "text-xs text-black/60 mt-3",
                        inverse === true && "text-white/80"
                      )}
                    >
                      {description}
                    </p>
                  )}
                </div>
<button
className={twMerge(
  "btn btn-primary w-full mt-5",
  inverse === true && "bg-white text-black"
  )}
  >
  {buttonText}
  </button>
<ul className="flex flex-col gap-4 mt-6">
  {features.map((feature) => (
    <li className="text-sm flex items-center gap-3">
<FaCheck className="w-5 h-5"/>
      <span>{feature}</span>
      </li>
  ))}
</ul>
</div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
