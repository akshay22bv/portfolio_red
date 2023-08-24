"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/variants";

const About = () => {
  return (
    <div
      id="about"
      className="pl-[20vw] md:pl-[10vw] h-screen grid place-items-center "
    >
      <div className="m-auto flex flex-col md:flex-row gap-10 text-white">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center gap-2 bg-black border-white border-[1px] p-4 rounded md:w-[200px] w-[150px]"
        >
          <h1 className="text-4xl md:text-7xl text-[#ff0000] ">1.5+</h1>
          <p className="text-sm md:text-lg">years of Experiance</p>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center gap-2 bg-black border-white border-[1px]  p-4 rounded md:w-[200px] w-[150px]"
        >
          <h1 className="text-4xl md:text-7xl text-[#ff0000]">15+</h1>
          <p className="text-sm">Projects</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
