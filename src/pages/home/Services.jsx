import Heading from "../../component/Heading";
import {
  FiActivity,
  FiCalendar,
  FiCompass,
  FiTruck,
} from "react-icons/fi";
import { motion } from "framer-motion";

const services = [
  {
    icon: FiCalendar,
    title: "Customizable Settings",
    description:
      "We create innovative, user-centric websites that transform ideas into visually engaging and functionally seamless digital experiences, helping businesses grow and connect with their audience.",
  },
  {
    icon: FiCompass,
    title: "Developer Friendly",
    description:
      "Our workflow is built for developers — clean architecture, well-structured code, and flexibility that ensures smooth collaboration, scalability, and long-term performance.",
  },
  {
    icon: FiActivity,
    title: "Responsive Design",
    description:
      "Our responsive designs adapt flawlessly across desktops, tablets, and mobile devices, ensuring optimal usability, accessibility, and performance on every screen size.",
  },
  {
    icon: FiTruck,
    title: "Cloud Integration",
    description:
      "We integrate cloud solutions that enable scalability, secure data storage, remote access, and seamless collaboration — all while reducing infrastructure costs.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Services = () => {
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
            heading="Explore Our Range of Professional Services Tailored to Meet Your Business Needs"
            subheading="Services"
            description="We design and build high-performance, visually compelling websites that reflect your brand identity. From UI/UX design to cloud-ready solutions, we focus on usability, scalability, and long-term business growth."
          />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:w-4/5 mx-auto mt-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px rgba(0,0,0,0.12)",
              }}
              className="group bg-white rounded-2xl p-8 text-center cursor-pointer transition"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 mb-6 group-hover:bg-blue-200 transition">
                <service.icon className="text-blue-600 text-3xl" />
              </div>

              {/* Title */}
              <h2 className="font-semibold text-xl text-gray-800 mb-3">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed px-2 md:px-6">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
