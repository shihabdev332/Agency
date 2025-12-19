import React from "react";
import Heading from "../../component/Heading";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <section className="bg-gradient-to-br from-[#eef2ff] to-[#f8fafc] py-24 px-5">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center bg-white shadow-2xl rounded-2xl p-10 md:p-16"
      >
        <Heading
          heading="Stay Updated with Our Newsletter"
          description="Subscribe to our newsletter to get the latest news, updates, and offers. Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col md:flex-row justify-center gap-4 mt-8"
        >
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md flex justify-center items-center space-x-2 hover:bg-blue-700 transition-all duration-300 cursor-pointer">
            <span>Subscribe Now</span>
          </button>
          <button className="border border-blue-600 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white text-blue-600 transition-all duration-300 cursor-pointer">
            Learn More
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Newsletter;
