import React from "react";
import Heading from "../../component/Heading";
import {
  FaAmazon,
  FaApple,
  FaFacebook,
  FaGoogle,
  FaMicrosoft,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const logos = [
  { icon: FaApple, name: "Apple" },
  { icon: FaGoogle, name: "Google" },
  { icon: FaAmazon, name: "Amazon" },
  { icon: FaMicrosoft, name: "Microsoft" },
  { icon: FaFacebook, name: "Facebook" },
];

const Logo = () => {
  return (
    <section className="bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="max-w-screen-xl mx-auto py-20 px-5">
        <Heading
          heading="Companies We Have Worked With"
          subheading="Our Trusted Partners"
          description="We collaborate with industry leaders to deliver high-quality digital solutions."
        />

        {/* Logo Marquee */}
        <div className="relative overflow-hidden mt-16">
          <motion.div
            className="flex gap-14 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 18,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.15 }}
                className="relative group flex items-center justify-center w-28 h-28 bg-white rounded-full shadow-md"
              >
                <logo.icon className="text-blue-600 text-5xl" />

                {/* Tooltip */}
                <span className="absolute -bottom-9 opacity-0 group-hover:opacity-100 transition text-xs bg-black text-white px-2 py-1 rounded">
                  {logo.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-100 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-200 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Logo;
