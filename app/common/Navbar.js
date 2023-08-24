"use client";
import React, { useState } from "react";

import { AiFillHome, AiFillSetting, AiOutlineUser } from "react-icons/ai";
import { FaProjectDiagram } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import { Link } from "react-scroll";
import "./Navbar.css";
import Image from "next/image";
import Profile from "../../assets/profile.png";
const Navbar = () => {
  const [active, setActive] = useState("hero");
  return (
    <div className="bg-slate-900 w-[20vw] md:w-[10vw] h-screen fixed top-0 left-0 flex justify-center">
      <div className="absolute top-2 left-2 p-2">
        <Image
          src={Profile}
          alt=""
          className="object-cover rounded-full w-12 h-12 drop-shadow-xl  shadow-white"
        />
      </div>
      <div className="text-white h-[200px] flex flex-col justify-between items-center my-auto">
        <Link
          className={`${
            active === "hero" && "bg-[#ff0000] "
          } p-2 rounded-full cursor-pointer`}
          spy={true}
          smooth={true}
          to="hero"
          onClick={() => {
            setActive("hero");
          }}
        >
          <AiFillHome />
        </Link>
        <Link
          className={`${
            active === "about" && "bg-[#ff0000] "
          } p-2 rounded-full cursor-pointer`}
          spy={true}
          smooth={true}
          to="about"
          onClick={() => {
            setActive("about");
          }}
        >
          <AiOutlineUser />
        </Link>
        <Link
          className={`${
            active === "skills" && "bg-[#ff0000] "
          } p-2 rounded-full cursor-pointer`}
          spy={true}
          smooth={true}
          to="skills"
          onClick={() => {
            setActive("skills");
          }}
        >
          <AiFillSetting />
        </Link>
        <Link
          className={`${
            active === "projects" && "bg-[#ff0000]"
          }  p-2 rounded-full cursor-pointer`}
          spy={true}
          smooth={true}
          to="projects"
          onClick={() => {
            setActive("projects");
          }}
        >
          <FaProjectDiagram />
        </Link>
        <Link
          className={`${
            active === "contact" && "bg-[#ff0000] "
          } p-2 rounded-full cursor-pointer`}
          spy={true}
          smooth={true}
          to="contact"
          onClick={() => {
            setActive("contact");
          }}
        >
          <MdContactPage />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
