"use client";
import { motion } from "framer-motion";

import logo from "../../../public/home/home-hero.svg";
const techIcons = [{ icon: logo, label: "Logo", colorClass: "text-blue-500" }];

const iconVariants = {
  animate: {
    scale: [1, 1.2, 1], // Keyframes for scaling
    rotate: [0, 10, -10, 0], // Keyframes for rotation
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const LoadingSkeleton = () => {
  return (
    <motion.div
      className="flex flex-col items-center my-4"
      initial="initial"
      animate="animate"
    >
      {techIcons.slice(0, 1).map((tech, index) => (
        <motion.div
          key={index}
          className={`text-3xl md:text-8xl ${tech.colorClass}`}
          variants={iconVariants}
        >
          {/* <tech.icon /> */}
          {tech.icon}
        </motion.div>
      ))}
      <div className="flex space-x-4 my-4">
        {techIcons.slice(1, 3).map((tech, index) => (
          <motion.div
            key={index}
            className={`text-3xl md:text-8xl ${tech.colorClass}`}
            variants={iconVariants}
          >
            <tech.icon />
          </motion.div>
        ))}
      </div>
      <div className="flex space-x-4 my-4">
        {techIcons.slice(5, 8).map((tech, index) => (
          <motion.div
            key={index}
            className={`text-3xl md:text-8xl ${tech.colorClass}`}
            variants={iconVariants}
          >
            <tech.icon />
          </motion.div>
        ))}
      </div>
      <div className="flex space-x-4 my-4">
        {techIcons.slice(3, 5).map((tech, index) => (
          <motion.div
            key={index}
            className={`text-3xl md:text-8xl ${tech.colorClass}`}
            variants={iconVariants}
          >
            <tech.icon />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default LoadingSkeleton;
