import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaChartLine,
  FaGlobe,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SeoSection = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const plans = [
    {
      name: "Starter SEO",
      desc: "Perfect for new websites and small businesses to gain visibility.",
      price: isMonthly ? 49 : 480,
      features: [
        "Keyword Research (10 keywords)",
        "On-Page SEO Setup",
        "Google Analytics Integration",
        "Monthly Performance Report",
      ],
    },
    {
      name: "Professional SEO",
      desc: "For growing companies that need consistent ranking and traffic.",
      price: isMonthly ? 99 : 990,
      features: [
        "Keyword Research (25 keywords)",
        "Off-Page Optimization",
        "Content Optimization",
        "Link Building Campaign",
        "Weekly Reporting",
      ],
    },
    {
      name: "Enterprise SEO",
      desc: "Advanced plan for established brands aiming for top-tier results.",
      price: isMonthly ? 199 : 1990,
      features: [
        "Unlimited Keywords",
        "Competitor Analysis",
        "Technical SEO Audit",
        "Custom SEO Strategy",
        "Dedicated SEO Specialist",
      ],
    },
  ];

  const stats = [
    { label: "Average Rank Growth", value: "250%" },
    { label: "Organic Traffic Boost", value: "180%" },
    { label: "Happy Clients", value: "120+" },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20 px-6 md:px-20 transition-all duration-500 mt-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-4"
        >
          SEO <span className="text-green-500">Optimization</span>
        </motion.h2>

        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
          Grow your business with our proven SEO strategies. From technical
          audits to keyword ranking and link-building — we ensure your website
          ranks higher, loads faster, and converts better.
        </p>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <FaSearch className="text-blue-500 text-4xl" />,
              title: "Keyword Research",
              desc: "Find high-traffic, low-competition keywords that drive results.",
            },
            {
              icon: <FaChartLine className="text-green-500 text-4xl" />,
              title: "Performance Analytics",
              desc: "Detailed insights to monitor keyword rankings, traffic & growth.",
            },
            {
              icon: <FaGlobe className="text-indigo-500 text-4xl" />,
              title: "Global SEO",
              desc: "Reach international audiences with multilingual optimization.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md text-center cursor-pointer transition-all"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Toggle Plan */}
        <div className="flex justify-center items-center mb-12 gap-3">
          <span
            className={`font-semibold ${
              isMonthly ? "text-green-500" : "text-gray-500"
            } cursor-pointer`}
            onClick={() => setIsMonthly(true)}
          >
            Monthly
          </span>
          <div
            className="relative w-14 h-7 bg-gray-300 dark:bg-gray-700 rounded-full cursor-pointer"
            onClick={() => setIsMonthly(!isMonthly)}
          >
            <motion.div
              layout
              className={`absolute top-1 left-1 w-5 h-5 rounded-full ${
                isMonthly ? "bg-green-500" : "bg-indigo-500"
              }`}
              animate={{ x: isMonthly ? 0 : 28 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
          <span
            className={`font-semibold ${
              !isMonthly ? "text-indigo-500" : "text-gray-500"
            } cursor-pointer`}
            onClick={() => setIsMonthly(false)}
          >
            Yearly
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col justify-between transition-all cursor-pointer"
            >
              <div>
                <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  {plan.name}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 mb-6">{plan.desc}</p>
                <h5 className="text-4xl font-extrabold text-green-500 mb-4">
                  ${plan.price}
                  <span className="text-lg text-gray-500 dark:text-gray-400">
                    {isMonthly ? " /mo" : " /yr"}
                  </span>
                </h5>
                <ul className="space-y-3 text-left">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <FaCheckCircle className="text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-8 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl w-full font-semibold transition-all cursor-pointer">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        {/* Animated Stats */}
        <div className="flex flex-wrap justify-center gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="text-center bg-white dark:bg-gray-800 px-8 py-6 rounded-xl shadow-md cursor-pointer"
            >
              <h4 className="text-4xl font-extrabold text-green-500 mb-2">
                {stat.value}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <Link to="/contact"
         
          className="mt-14 inline-block bg-gradient-to-r from-green-500 to-indigo-500 text-white px-8 py-4 rounded-full font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer"
        >
          Boost Your SEO Now 🚀
        </Link>
      </div>
    </section>
  );
};

export default SeoSection;
