import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaAndroid, FaApple, FaLaptopCode, FaRocket, FaCheckCircle } from "react-icons/fa";

const AppDevelopment = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      title: "Basic",
      desc: "Ideal for startups or small personal projects.",
      monthly: 120,
      yearly: 1100,
      features: [
        "Single Platform (Android or iOS)",
        "Simple UI with up to 5 screens",
        "API integration",
        "1-month maintenance support",
      ],
    },
    {
      title: "Business",
      desc: "Best for small and medium enterprises.",
      monthly: 200,
      yearly: 1800,
      features: [
        "Cross Platform (Android + iOS)",
        "Custom UI/UX design",
        "Secure Backend Integration (Node.js / Express)",
        "Push Notifications & Analytics",
      ],
    },
    {
      title: "Enterprise",
      desc: "Perfect for large-scale, high-performance apps.",
      monthly: 350,
      yearly: 3200,
      features: [
        "Full-stack App Solution",
        "Admin Dashboard + API",
        "Cloud Database (MongoDB / Firebase)",
        "Dedicated 24/7 Support",
      ],
    },
  ];

  return (
    <section
      id="appdev"
      className="bg-gray-50 dark:bg-gray-900 py-20 px-6 md:px-20 transition-all duration-500 mt-15"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-4"
        >
          App <span className="text-indigo-500">Development</span>
        </motion.h2>

        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
          We build scalable, high-performing mobile and web applications that
          help your business grow. From idea to launch — our expert developers
          design, develop, and deploy apps that deliver real impact.
        </p>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8"
          >
            <FaAndroid className="text-green-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Android Development
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Native and cross-platform Android apps using React Native or Kotlin.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8"
          >
            <FaApple className="text-gray-900 dark:text-gray-300 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              iOS Development
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Elegant and smooth iOS apps optimized for all Apple devices.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8"
          >
            <FaLaptopCode className="text-indigo-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Web App Development
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Responsive web apps using MERN Stack, with top-notch performance.
            </p>
          </motion.div>
        </div>

        {/* Toggle Button */}
        <div className="flex items-center justify-center mb-10">
          <span className={`font-medium ${!isYearly ? "text-indigo-500" : "text-gray-500"}`}>
            Monthly Plan
          </span>
          <label className="mx-4 inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
              className="sr-only"
            />
            <span className="relative w-14 h-8 bg-gray-300 dark:bg-gray-700 rounded-full transition">
              <span
                className={`absolute left-1 top-1 bg-white dark:bg-gray-200 w-6 h-6 rounded-full shadow-md transform transition-transform ${
                  isYearly ? "translate-x-6" : ""
                }`}
              ></span>
            </span>
          </label>
          <span className={`font-medium ${isYearly ? "text-indigo-500" : "text-gray-500"}`}>
            Yearly Plan
          </span>
        </div>

        {/* Pricing Plans */}
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
                  ${isYearly ? plan.yearly : plan.monthly}
                  <span className="text-lg text-gray-500 dark:text-gray-400">
                    /{isYearly ? "year" : "month"}
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

              <button className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl w-full font-semibold transition-all cursor-pointer">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppDevelopment;
