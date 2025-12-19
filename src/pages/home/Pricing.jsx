import React, { useState } from "react";
import Heading from "../../component/Heading";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    name: "Freelancer",
    monthlyPrice: 25,
    yearlyPrice: 250,
    saves: "$25 USD per month, billed annually",
    features: ["1 Project", "Basic Support", "All Templates", "5GB Storage"],
  },
  {
    name: "Professional",
    monthlyPrice: 65,
    yearlyPrice: 650,
    popular: true,
    saves: "$55 USD per month, billed annually",
    features: [
      "5 Projects",
      "Priority Support",
      "All Templates",
      "25GB Storage",
      "Advanced Analytics",
    ],
  },
  {
    name: "Agency",
    monthlyPrice: 95,
    yearlyPrice: 950,
    saves: "$95 USD per month, billed annually",
    features: [
      "Unlimited Projects",
      "24/7 Support",
      "All Templates",
      "Unlimited Storage",
      "Custom Branding",
      "Team Collaboration",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="bg-gradient-to-br from-[#f8fafc] to-[#eef2ff] py-24">
      <div className="max-w-screen-2xl mx-auto px-5">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading
            heading="Choose the Perfect Plan for Your Business"
            subheading="Pricing"
            description="Flexible pricing options designed to scale with your needs."
          />
        </motion.div>

        {/* Toggle */}
        <div className="flex justify-center items-center gap-4 mt-12 mb-16">
          <span className="text-gray-600 font-medium">Monthly</span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative cursor-pointer w-14 h-8 bg-gray-300 rounded-full"
          >
            <span
              className={`absolute top-1 left-1 w-6 h-6 bg-blue-600 rounded-full transition-transform ${
                isYearly ? "translate-x-6" : ""
              }`}
            />
          </button>
          <span className="text-gray-600 font-medium">
            Yearly <span className="text-blue-600">(Save more)</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              className={`relative bg-white rounded-2xl shadow-lg p-8 text-center ${
                plan.popular ? "ring-2 ring-blue-600" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-500 mb-6">
                Best for {plan.name.toLowerCase()} teams
              </p>

              {/* Price */}
              <div className="text-4xl font-bold text-gray-800 mb-4">
                ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                <span className="text-sm text-gray-500">
                  /{isYearly ? "year" : "month"}
                </span>
              </div>

              {isYearly && (
                <p className="text-sm text-blue-600 mb-6">{plan.saves}</p>
              )}

              {/* Button */}
              <button
                className={`w-full py-3 rounded-full font-medium transition ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                }`}
              >
                Choose {plan.name}
              </button>

              {/* Features */}
              <ul className="mt-8 space-y-3 text-gray-600 text-sm text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-blue-600">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Pricing;
