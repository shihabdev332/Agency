import React from "react";
import { FiCloud, FiCode, FiSettings, FiSmartphone } from "react-icons/fi";
import Heading from "../../component/Heading";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const tools = [
  {
    icon: FiSettings,
    title: "Customizable Settings",
    description: "Easily configure tools to perfectly match your project needs.",
  },
  {
    icon: FiCode,
    title: "Efficient Coding",
    description: "Write clean, scalable, and optimized code effortlessly.",
  },
  {
    icon: FiSmartphone,
    title: "Mobile Friendly",
    description: "Fully responsive experience across all modern devices.",
  },
  {
    icon: FiCloud,
    title: "Cloud Integration",
    description: "Secure cloud syncing with high performance & reliability.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
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

const Tools = () => {
  return (
    <section className="bg-gradient-to-br from-[#f8fafc] to-[#eef2ff]">
      <div className="max-w-screen-2xl mx-auto py-24 px-5">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading
            heading="All-in-One Solution for Your Projects"
            subheading="The Tools You Need"
            description="Powerful tools designed to accelerate your development workflow."
          />
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-16 mb-20"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
              }}
              className="group bg-white rounded-2xl p-8 text-center cursor-pointer transition"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 mb-6"
              >
                <tool.icon className="text-blue-600 text-3xl" />
              </motion.div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {tool.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <Link
            to="/faq"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition shadow-lg"
          >
            Explore More
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Tools;
