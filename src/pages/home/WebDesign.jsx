import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPaintBrush, FaMobileAlt, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";

const WebDesign = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const plans = [
    {
      title: "Starter",
      desc: "Perfect for small businesses or personal portfolios.",
      weekly: 50,
      monthly: 180,
      features: [
        "1 Custom Landing Page",
        "Responsive Design",
        "Basic SEO Setup",
        "Email Support",
      ],
    },
    {
      title: "Professional",
      desc: "Best for growing agencies & startups.",
      weekly: 90,
      monthly: 320,
      features: [
        "Up to 5 Pages",
        "Advanced SEO & Analytics",
        "Free Domain & Hosting (1 year)",
        "Priority Support",
      ],
    },
    {
      title: "Premium",
      desc: "Complete website solution for established brands.",
      weekly: 140,
      monthly: 480,
      features: [
        "Unlimited Pages",
        "E-commerce Integration",
        "Performance Optimization",
        "24/7 Dedicated Support",
      ],
    },
  ];

  return (
    <section
      id="webdesign"
      className="bg-gray-50 dark:bg-gray-900 mt-15 py-20 px-6 md:px-20 transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-4"
        >
          Web <span className="text-indigo-500">Design & Development</span>
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
          We craft stunning, responsive, and SEO-friendly websites that empower
          your business. Whether you need a landing page or a large-scale
          website — we deliver pixel-perfect designs with powerful performance.
        </p>

        {/* Feature highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8"
          >
            <FaPaintBrush className="text-indigo-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Modern Design
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Sleek, minimal and responsive UI for your brand’s digital identity.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8"
          >
            <FaMobileAlt className="text-indigo-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Mobile Friendly
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Optimized for every device ensuring the best user experience.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8"
          >
            <FaRocket className="text-indigo-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Fast & Optimized
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Built with Next.js / React ensuring blazing fast load times.
            </p>
          </motion.div>
        </div>

        {/* Toggle Button */}
        <div className="flex items-center justify-center mb-10">
          <span className={`font-medium ${!isMonthly ? "text-indigo-500" : "text-gray-500"}`}>
            Weekly Plan
          </span>
          <label className="mx-4 inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isMonthly}
              onChange={() => setIsMonthly(!isMonthly)}
              className="sr-only"
            />
            <span className="relative w-14 h-8 bg-gray-300 dark:bg-gray-700 rounded-full transition">
              <span
                className={`absolute left-1 top-1 bg-white dark:bg-gray-200 w-6 h-6 rounded-full shadow-md transform transition-transform ${
                  isMonthly ? "translate-x-6" : ""
                }`}
              ></span>
            </span>
          </label>
          <span className={`font-medium ${isMonthly ? "text-indigo-500" : "text-gray-500"}`}>
            Monthly Plan
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col justify-between transition-all"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  {plan.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">{plan.desc}</p>
                <h4 className="text-4xl font-extrabold text-indigo-500 mb-4">
                  ${isMonthly ? plan.monthly : plan.weekly}
                  <span className="text-lg text-gray-500 dark:text-gray-400">
                    /{isMonthly ? "month" : "week"}
                  </span>
                </h4>
                <ul className="space-y-3 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <FaCheckCircle className="text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contact" className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl w-full font-semibold transition-all cursor-pointer">
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDesign;
