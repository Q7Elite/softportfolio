import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/16/solid";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
      <div
        data-aos="fade-right"
        data-aos-anchor-placement="top-right"
        className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]
      border-b-[1.4px] pb-5 border-gray-600 border-opacity-40"
      >
        <div>
          <div className="font-logo text-white text-[18px]">
            <span className="text-[30px] md:text[40px] text-yellow-400">
              SQ
            </span>
            SoftSpace
          </div>
          <h1 className="text-[14px] mt-[0.5rem] text-white opacity-70">
            Your one stop software solutions at an affordable cost
          </h1>
          <p className="mt-[1.3rem] text-yellow-300 underline font-semibold">
            softtoque@gmail.com
          </p>
          <div className="flex mt-[1.3rem] space-x-4">
            <a
              href="https://facebook.com/bonface.karichu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-white hover:text-yellow-300" />
            </a>
            <a
              href="https://twitter.com/BGathura37051"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-white hover:text-yellow-300" />
            </a>
            <a
              href="https://instagram.com/karichu_gathura/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white hover:text-yellow-300" />
            </a>
            <a
              href="https://linkedin.com/in/karichu-gathura-624b644a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-white hover:text-yellow-300" />
            </a>
          </div>
        </div>
        <div className="md:mx-auto ">
          <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
            Quick Link
          </h1>
          <div className="flex space-x-2 flex-col items-start align-baseline">
            <a
              href="#about"
              className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300"
            >
              About
            </a>
            <a
              href="#services"
              className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300"
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
            Address
          </h1>
          <div className="flex items-center mt-[1rem] space-x-2">
            <MapIcon className="w-[1rem] h-[1rem] text-yellow-300" />
            <p className="text-[17px] font-normal text-white opacity-75">
              Nairobi, Westlands
            </p>
          </div>
          <div className="flex items-center mt-[1rem] space-x-2">
            <EnvelopeIcon className="w-[1rem] h-[1rem] text-yellow-300" />
            <p className="text-[17px] font-normal text-white opacity-75">
              softtoque@gmail.com
            </p>
          </div>
          <div className="flex items-center mt-[1rem] space-x-2">
            <PhoneIcon className="w-[1rem] h-[1rem] text-yellow-300" />
            <p className="text-[17px] font-normal text-white opacity-75">
              +254722367989
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[1.4rem] w-[80%] mx-auto text-white opacity-70">
        &#169; Copyright softspace 2024
      </div>
    </div>
  );
};

export default Footer;
