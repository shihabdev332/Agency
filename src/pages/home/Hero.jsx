import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import bannerImg from "../../assets/banner.png";
import { FaRegCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="bg-gradient-to-br from-[#f5e6dd] to-[#e8f0ff]">
      <div className="max-w-screen-2xl mx-auto min-h-screen px-6 py-20 flex flex-col lg:flex-row items-center justify-between">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Creative Web Design <br /> for Business
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-xl">
            Growing with smart digital solutions. Let’s help you take your business to the next level.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/freeTrial"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Get Started <FiArrowRight />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center relative"
        >
          <div className="relative group cursor-pointer">
            <img
              src={bannerImg}
              alt="Banner"
              className="rounded-xl shadow-xl"
            />

            <button
              onClick={() => setShowModal(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition rounded-xl"
            >
              <FaRegCirclePlay className="text-white text-6xl hover:scale-110 transition" />
            </button>
          </div>
        </motion.div>

        {/* MODAL */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl p-5 relative max-w-2xl w-full"
              >
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-2 right-3 text-2xl font-bold text-gray-600 hover:text-red-500"
                >
                  ×
                </button>

                <iframe
                  className="w-full aspect-video rounded-md"
                  src="https://www.youtube.com/embed/g7xkVEWrX8E"
                  title="YouTube video"
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Hero;
