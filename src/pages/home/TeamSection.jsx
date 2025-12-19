import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Heading from "../../component/Heading";

const teamMembers = [
  {
    id: 1,
    image: "/images/members/person1.png",
    name: "John Doe",
    role: "CEO",
    linkedIn: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    instagram: "https://instagram.com/johndoe",
    facebook: "https://facebook.com/johndoe",
  },
  {
    id: 2,
    image: "/images/members/person2.png",
    name: "Jane Smith",
    role: "CTO",
    linkedIn: "https://linkedin.com/in/janesmith",
    twitter: "https://twitter.com/janesmith",
    instagram: "https://instagram.com/janesmith",
    facebook: "https://facebook.com/janesmith",
  },
  {
    id: 3,
    image: "/images/members/person3.png",
    name: "Mark Johnson",
    role: "Designer",
    linkedIn: "https://linkedin.com/in/markjohnson",
    twitter: "https://twitter.com/markjohnson",
    instagram: "https://instagram.com/markjohnson",
    facebook: "https://facebook.com/markjohnson",
  },
  {
    id: 4,
    image: "/images/members/person4.png",
    name: "Emily Carter",
    role: "Developer",
    linkedIn: "https://linkedin.com/in/emilycarter",
    twitter: "https://twitter.com/emilycarter",
    instagram: "https://instagram.com/emilycarter",
    facebook: "https://facebook.com/emilycarter",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

const TeamSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#f8fafc] to-[#eef2ff] py-24">
      <div className="max-w-screen-2xl mx-auto px-5">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading
            heading="Meet the Experts Behind Our Success"
            subheading="Our Team"
            description="A passionate team of designers, developers, and strategists dedicated to building exceptional digital experiences."
          />
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden transition"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Social Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                  <a href={member.linkedIn} target="_blank" rel="noreferrer">
                    <FaLinkedinIn className="text-white hover:text-blue-400 text-xl" />
                  </a>
                  <a href={member.twitter} target="_blank" rel="noreferrer">
                    <FaTwitter className="text-white hover:text-blue-400 text-xl" />
                  </a>
                  <a href={member.instagram} target="_blank" rel="noreferrer">
                    <FaInstagram className="text-white hover:text-blue-400 text-xl" />
                  </a>
                  <a href={member.facebook} target="_blank" rel="noreferrer">
                    <FaFacebookF className="text-white hover:text-blue-400 text-xl" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 mb-6">
                  {member.role}
                </p>

                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                  Contact {member.name.split(" ")[0]}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TeamSection;
