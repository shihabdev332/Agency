import React from "react";
import Heading from "../../component/Heading";
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    image: "/images/blogs/blog1.png",
    category: "Technology",
    title: "How AI is Shaping the Future of Web Development",
    description:
      "Discover how artificial intelligence is transforming the way we build and design modern websites.",
    authorImage: "/images/authors/author1.png",
    authorName: "John Doe",
    authorRole: "Tech Blogger",
  },
  {
    id: 2,
    image: "/images/blogs/blog2.png",
    category: "Design",
    title: "10 Tips for Creating Stunning UI/UX Designs",
    description:
      "Learn practical strategies to design interfaces that truly engage users.",
    authorImage: "/images/authors/author2.png",
    authorName: "Jane Smith",
    authorRole: "UX Designer",
  },
  {
    id: 3,
    image: "/images/blogs/blog3.png",
    category: "Development",
    title: "Understanding JavaScript Closures in Depth",
    description:
      "A clear and concise guide to one of JavaScript’s most powerful concepts.",
    authorImage: "/images/authors/author3.png",
    authorName: "Mark Johnson",
    authorRole: "Frontend Developer",
  },
  {
    id: 4,
    image: "/images/blogs/blog4.png",
    category: "Business",
    title: "Why Digital Transformation is Essential for Success",
    description:
      "Explore how modern businesses grow by embracing digital transformation.",
    authorImage: "/images/authors/author4.png",
    authorName: "Emily Carter",
    authorRole: "Business Analyst",
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

const Blog = () => {
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
            heading="Latest Articles & Insights"
            subheading="Our Blogs"
            description="Insights, ideas, and industry trends from our expert team."
          />
        </motion.div>

        {/* Blogs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16"
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-2">
                  {blog.category}
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 leading-snug">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {blog.description}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={blog.authorImage}
                    alt={blog.authorName}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">
                      {blog.authorName}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {blog.authorRole}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Blog;
