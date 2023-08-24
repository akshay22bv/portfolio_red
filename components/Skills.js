"use client";
import React from "react";
import CSS from "../assets/skills/css.png";
import JS from "../assets/skills/javascript_1.png";
import HTML from "../assets/skills/html.png";
import REACT from "../assets/skills/react_new.png";
import TAILWIND from "../assets/skills/node_js.png";
import MUI from "../assets/skills/mui_logo.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/variants";

const Skills = () => {
  return (
    <div
      id="skills"
      className="pl-[20vw] md:pl-[10vw] h-screen grid place-items-center "
    >
      <div className="m-auto  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center flex-col gap-1"
        >
          <div className="h-16">
            <Image src={CSS} alt="" width={50} height={50} />
          </div>
          <p>CSS</p>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center flex-col gap-1"
        >
          <div className="h-16">
            <Image src={HTML} alt="" width={50} height={50} />{" "}
          </div>
          <p>HTML</p>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center flex-col gap-1"
        >
          <div className="h-16">
            <Image src={JS} alt="" width={50} height={50} />
          </div>
          <p>Javascript</p>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center flex-col gap-1"
        >
          <div className="h-16">
            <Image src={REACT} alt="" width={50} height={50} />
          </div>
          <p>React JS</p>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center flex-col gap-1"
        >
          <div className="h-16">
            <Image src={TAILWIND} alt="" width={50} height={50} />
          </div>
          <p>Node js</p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center flex-col gap-1"
        >
          <div className="h-16">
            <Image src={MUI} alt="" width={50} height={50} />
          </div>
          <p>Material UI</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
