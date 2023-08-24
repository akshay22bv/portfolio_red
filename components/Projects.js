"use client";
import Image from "next/image";
import React from "react";
import Shoe_image from "../assets/projects/nike_shoes.png";
import Project from "../assets/projects/projects_frnd.png";
import Women from "../assets/projects/women_ecommerce.png";
import firstPortFolio from "../assets/projects/first_portfolio.png";
import { fadeIn } from "@/app/variants";
import { motion } from "framer-motion";

const Projects = () => {
  const web = {
    shoe: "https://nike-nu.vercel.app/",
    project: "https://abhi-portfolio-lyart.vercel.app/",
    cloth: "https://cloth-seven.vercel.app/",
    portfolio: "https://akshay-one.vercel.app/",
  };
  return (
    <div
      id="projects"
      className="pl-[20vw] md:pl-[10vw] h-screen grid place-items-center "
    >
      <div className="m-auto grid p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:flex-row gap-3 text-white text-xl md:text-2xl max-w-2xl">
        <div className="w-[150px] h-[100px] p-2 flex items-center">
          <h1>More Websites</h1>
        </div>
        <a
          href={web.project}
          className="w-[150px] h-[100px] bg-[#ff0000] tex-white rounded p-2 flex items-center"
        >
          <h1>Engineering Projects</h1>
        </a>
        <a
          href={web.shoe}
          className="w-[150px] h-[100px] bg-purple-900 tex-white rounded p-2 flex items-center"
        >
          <h1>
            Shoes <br /> E-commerce Website
          </h1>
        </a>
        <a
          href={web.portfolio}
          className="w-[150px] h-[100px] bg-green-500 tex-white rounded p-2 flex items-center  "
        >
          <h1>My First Portfolio</h1>
        </a>
        <a
          href={web.cloth}
          className="w-[150px] h-[100px] bg-blue-600 tex-white rounded p-2 flex items-center "
        >
          <h1>
            Cloths <br />
            E-commerce Website
          </h1>
        </a>
      </div>
    </div>
  );
};

export default Projects;
