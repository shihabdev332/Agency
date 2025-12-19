import React, { useState } from "react";
import Heading from "../../component/Heading";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    id: 1,
    question: "Who should use the app?",
    answer:
      "Our app is ideal for freelancers, professionals, and agencies who want to manage projects efficiently, collaborate with teams, and deliver high-quality results faster.",
  },
  {
    id: 2,
    question: "What is included with my subscription?",
    answer:
      "Your subscription includes full access to project management tools, collaboration features, premium templates, analytics, and support based on your plan.",
  },
  {
    id: 3,
    question: "How do I get paid?",
    answer:
      "We support secure payment methods including Stripe, PayPal, and direct bank transfers. All transactions are encrypted and easy to track from your dashboard.",
  },
  {
    id: 4,
    question: "Is my personal information safe?",
    answer:
      "Absolutely. We use industry-standard encryption and security practices to ensure your data and personal information remain fully protected.",
  },
  {
    id: 5,
    question: "How can we get in touch?",
    answer:
      "You can reach us anytime via email, live chat, or our contact form. Our support team is always happy to help.",
  },
];

const FAQs = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-gradient-to-br from-[#f8fafc] to-[#eef2ff] py-24">
      <div className="max-w-screen-xl mx-auto px-5">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading
            heading="Frequently Asked Questions"
            subheading="FAQs"
            description="Everything you need to know before getting started."
          />
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto mt-14 space-y-4">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() =>
                  setActive(active === faq.id ? null : faq.id)
                }
                className="w-full cursor-pointer flex justify-between items-center px-6 py-5 text-left"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <FiChevronDown
                  className={`text-xl text-blue-600 transition-transform ${
                    active === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <AnimatePresence>
                {active === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQs;
