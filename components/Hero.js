"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/variants";

const Hero = () => {
  return (
    <div
      id="hero"
      className="pl-[20vw] md:pl-[10vw] h-screen grid place-items-center "
    >
      <div className="m-auto  flex flex-col gap-3 px-5 max-w-lg">
        <motion.h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
        >
          Hi there, I&apos;m{" "}
        </motion.h1>

        <motion.h1
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-bl text-transparent bg-clip-text from-[#ff0000] to-red-400 font-semibold text-[35px] md:text-[70px]"
        >
          Akshay Bilagi
        </motion.h1>

        <motion.h1
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
        >
          I&apos;m a full-stack developer specialing in building experiances.
          Currently, I&apos;m focused on building responsive full-stack web
          applications.
        </motion.h1>
      </div>
    </div>
  );
};

export default Hero;
