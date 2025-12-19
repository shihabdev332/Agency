import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import blue from "../../assets/blue.webp";
import camp from "../../assets/camp.png";
import infinit from "../../assets/infinit.webp";
import tech from "../../assets/tech.jpg";
import whole from "../../assets/1.jpg";

const testimonials = [
  {
    img: blue,
    companyName: "Tech Solutions",
    text: "This is an amazing service! The product quality exceeded my expectations. The team was highly professional and responsive. The final result was exactly what I envisioned.",
    name: "John Doe",
  },
  {
    img: camp,
    companyName: "Digital Innovations",
    text: "Highly recommended! The process was smooth and efficient, and the customer support was outstanding. Everything was delivered on time and exceeded expectations.",
    name: "Jane Smith",
  },
  {
    img: infinit,
    companyName: "Creative Minds",
    text: "The team understood our needs perfectly and delivered a high-quality product. Excellent communication, strong execution, and great attention to detail.",
    name: "Michael Johnson",
  },
  {
    img: tech,
    companyName: "Innovative Solutions",
    text: "Outstanding experience from start to finish. Professional service, great support, and a final product that truly impressed our entire team.",
    name: "Emily Davis",
  },
  {
    img: whole,
    companyName: "Future Tech",
    text: "Fast, reliable, and high-quality service. We’ve already recommended them to our partners and will definitely collaborate again.",
    name: "David Williams",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="bg-gradient-to-br from-[#f8fafc] to-[#eef2ff] py-24">
      <div className="max-w-3xl mx-auto px-5">

        {/* Card */}
        <div className="relative bg-white rounded-3xl shadow-xl p-10 text-center">

          {/* Logo + Company */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-sm uppercase tracking-wider text-blue-600 font-semibold mb-3">
                {testimonials[activeIndex].companyName}
              </p>

              <img
                src={testimonials[activeIndex].img}
                alt="company logo"
                className="mx-auto w-32 h-20 object-contain mb-6"
              />

              {/* Review */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8 px-2">
                “{testimonials[activeIndex].text}”
              </p>

              {/* Reviewer */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
                  {testimonials[activeIndex].name.charAt(0)}
                </div>
                <p className="font-medium text-gray-800">
                  {testimonials[activeIndex].name}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-700 transition"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-600 text-white cursor-pointer w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-700 transition"
          >
            <FaArrowRight />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
