"use client";
import React from "react";
import { BsLinkedin } from "react-icons/bs";

import { ImInstagram } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail, MdPlace, MdCall } from "react-icons/md";

const Contact = () => {
  const social_media = {
    mail: "mailto:Akshay22bv@gmail.com",
    linkedin: "https://www.linkedin.com/in/akshay22bv/",
    whatsapp: "https://wa.me/9686721221",
    instagram: "https://www.instagram.com/bilagi_akshay/",
  };

  return (
    <div
      id="contact"
      className="pl-[20vw] md:pl-[10vw] h-screen grid place-items-center "
    >
      <form
        method="POST"
        action="https://getform.io/f/513534e9-f78b-4d4a-9fa3-10e3b55e7d39"
        className="m-auto flex flex-col gap-3 px-4 w-10/12 md:w-6/12 lg:w-4/12"
      >
        <input
          type="text"
          className="border-white bg-white rounded text-black outline-white p-2"
          placeholder="Enter Name..."
        ></input>
        <input
          type="text"
          className="border-white bg-white rounded text-black outline-white p-2 "
          placeholder="Enter Email..."
        ></input>
        <textarea
          type="text"
          className="border-white bg-white rounded text-black outline-white p-2 "
          placeholder="Enter Message..."
        ></textarea>

        <button
          className="btn bg-[#ff0000] text-white border-[#ff0000]"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Submit
        </button>

        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <MdEmail />
            Akshay22bv@gmail.com
          </div>
          <div className="flex items-center gap-2">
            <MdCall /> 9686721221
          </div>
          <div className="flex items-center gap-2">
            <MdPlace /> <span>Bengaluru</span>
          </div>
        </div>

        <div className=" flex justify-around text-[20px]">
          <a
            target="_blank"
            href={social_media.instagram}
            className=" p-1 rounded-full"
          >
            <ImInstagram className="text-red-400 cursor-pointer" />
          </a>
          <a
            target="_blank"
            href={social_media.linkedin}
            className=" p-1 rounded-full"
          >
            <BsLinkedin className="text-blue-500 cursor-pointer" />
          </a>
          <a
            target="_blank"
            href={social_media.mail}
            download
            className=" p-1 rounded-full"
          >
            <MdEmail className="text-red-600 cursor-pointer" />
          </a>
          <a
            target="_blank"
            href={social_media.whatsapp}
            className=" p-1 rounded-full"
          >
            <IoLogoWhatsapp className="text-green-500 cursor-pointer" />
          </a>
        </div>
      </form>
    </div>
  );
};

export default Contact;
