import { FaCheck } from 'react-icons/fa';

const pricingTiers = [
  {
    title: "User",
    monthlyPrice: 100,
    buttonText: "Get started for free",
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
    <section className="py-20">
      <div className="container">
        <h2 className="section-title">Pricing</h2>
        <p className="product-description mt-5">
          Upgrade for unlimited tasks, better integrations,
          exclusive features, and more.
        </p>
        <div className="pricing-tiers">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features
            },) => (
<div className="p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA]">
  <h3>{title}</h3>
  <div>
    <span>${monthlyPrice}</span>
    <span>/month</span>
</div>
<button>{buttonText}</button>
<ul>
  {features.map((feature) => (
    <li>
<FaCheck className="w-6 h-6"/>
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
