import React from "react";
import { motion } from "framer-motion";
import {
  FaFigma,
  FaPalette,
  FaRegLightbulb,
  FaSmileBeam,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const UiUxDesign = () => {
  const services = [
    {
      title: "Wireframing & Prototyping",
      icon: <FaRegLightbulb className="text-yellow-500 text-4xl" />,
      desc: "Transform ideas into visual blueprints using Figma, XD, or Sketch — helping you validate before development.",
    },
    {
      title: "User Interface Design",
      icon: <FaPalette className="text-pink-500 text-4xl" />,
      desc: "Clean, modern, and responsive UI that reflects your brand identity with perfect color & typography balance.",
    },
    {
      title: "User Experience Strategy",
      icon: <FaSmileBeam className="text-green-500 text-4xl" />,
      desc: "We focus on human-centered design, ensuring your users enjoy a seamless, intuitive, and delightful experience.",
    },
  ];

  const plans = [
    {
      name: "Starter UI Kit",
      desc: "For startups or MVPs that need a quick design foundation.",
      price: 80,
      features: [
        "Up to 3 UI screens",
        "Color & typography guide",
        "Basic prototype",
        "Delivery in 3 days",
      ],
    },
    {
      name: "Professional Design",
      desc: "Perfect for brands looking to establish strong digital presence.",
      price: 160,
      features: [
        "Up to 8 custom screens",
        "Responsive design system",
        "Interactive prototype (Figma)",
        "Usability testing report",
      ],
    },
    {
      name: "Enterprise Experience",
      desc: "For large-scale, enterprise-level design projects.",
      price: 280,
      features: [
        "Unlimited screens",
        "Full design system + components",
        "UX audit & user testing",
        "Dedicated designer support",
      ],
    },
  ];

  return (
    <section
      id="uiux"
      className="bg-gray-50 dark:bg-gray-900 mt-15 py-20 px-6 md:px-20 transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-4"
        >
          UI / UX <span className="text-indigo-500">Design</span>
        </motion.h2>

        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
          Our UI/UX team blends creativity and usability to design digital
          products that engage users and drive results. We believe great design
          isn’t just how it looks — it’s how it feels and functions.
        </p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md text-center cursor-pointer transition-all"
            >
              <div className="flex justify-center mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {s.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Pricing Section */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-10"
        >
          Choose Your <span className="text-indigo-500">Design Package</span>
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-8">
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
                <h5 className="text-4xl font-extrabold text-indigo-500 mb-4">
                  ${plan.price}
                  <span className="text-lg text-gray-500 dark:text-gray-400"> /project</span>
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

              <button className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl w-full font-semibold transition-all cursor-pointer">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <Link to="/contact"
        
          className="mt-14 inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer"
        >
         GO for Design
        </Link>

        {/* Tools */}
        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <FaFigma className="text-3xl text-pink-500 cursor-pointer" />
          <FaPalette className="text-3xl text-indigo-500 cursor-pointer" />
          <FaRegLightbulb className="text-3xl text-yellow-500 cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default UiUxDesign;
