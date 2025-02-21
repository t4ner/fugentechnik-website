import React from "react";
import { motion } from "framer-motion";

const Statistics = ({ title, description, stats }) => {
  return (
    <div className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Dekoratif SVG Desenler */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#02C5DF", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#008FC7", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              d="M0,50 Q25,25 50,50 T100,50"
              stroke="url(#grad1)"
              strokeWidth="0.5"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M0,60 Q25,35 50,60 T100,60"
              stroke="url(#grad1)"
              strokeWidth="0.5"
              fill="none"
              className="delay-100 animate-pulse"
            />
            <path
              d="M0,40 Q25,15 50,40 T100,40"
              stroke="url(#grad1)"
              strokeWidth="0.5"
              fill="none"
              className="delay-200 animate-pulse"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="container relative px-4 py-12 mx-auto md:py-24">
        {/* Header Section */}
        <div className="mx-auto mb-12 text-center md:mb-24">
          <h2 className="text-2xl md:text-5xl font-bold  md:mb-6 bg-gradient-to-r pb-2 from-[#02C5DF] to-[#008FC7] bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="px-4 text-sm text-gray-600 md:text-lg">{description}</p>
        </div>

        {/* Statistics Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 gap-6 smmd:grid-cols-2 md:grid-cols-3 md:gap-8 lg:gap-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`group relative ${
                  index === 1 ? "mt-0 md:mt-12" : ""
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#02C5DF] to-[#008FC7] rounded-2xl opacity-20 group-hover:opacity-30 transform transition-all duration-300 -rotate-6"></div>
                <div className="relative p-6 transition-transform duration-300 transform bg-white shadow-xl rounded-2xl md:p-8 hover:-translate-y-2">
                  <div className="text-center">
                    <span className="text-3xl md:text-6xl font-bold text-[#02C5DF] mb-2 md:mb-4 block">
                      {stat.value}
                    </span>
                    <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3 bg-gradient-to-r from-[#02C5DF] to-[#008FC7] text-transparent bg-clip-text">
                      {stat.title}
                    </h3>
                    <p className="text-sm text-gray-600 md:text-base">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Statistics;
