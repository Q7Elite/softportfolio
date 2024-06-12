import { CheckIcon } from "@heroicons/react/16/solid";
import React from "react";

const AboutMe = () => {
  return (
    <div id="about" className="mt-[4rem] bg-black pb-[3rem]">
      <div
        className="w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1
      lg:grid-cols-2 gap-[2rem]"
      >
        <div>
          <p className="heading__mini">About Me</p>
          <h1 className="heading__primary">
            Professional{" "}
            <span className="text-yellow-400">Software Developer</span> for your
            business
          </h1>
          <p className="text-[15px] mt-[1.3rem] text-white opacity-75">
            Are you looking for a professional software developer to elevate
            your business? With years of experience in crafting high-quality
            software solutions, I bring expertise in both frontend and backend
            development, ensuring seamless, efficient, and visually stunning
            applications. My proficiency in HTML, CSS, JavaScript, React,
            Node.js, and Python enables me to tackle diverse projects and
            deliver exceptional results. I am committed to understanding your
            business needs and translating them into innovative, user-friendly
            software that drives growth and enhances customer satisfaction.
            Partner with me, and let's transform your business with cutting-edge
            technology and unparalleled dedication to excellence.
          </p>
          <div className="mt-[2rem] space-y-3">
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              className="flex items-center space-x-4"
            >
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">Frontend Development</p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              data-aos-delay="200"
              className="flex items-center space-x-4"
            >
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">Backend Development</p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              data-aos-delay="400"
              className="flex items-center space-x-4"
            >
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">Full Stack Development</p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              data-aos-delay="600"
              className="flex items-center space-x-4"
            >
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">Database Integration</p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              data-aos-delay="800"
              className="flex items-center space-x-4"
            >
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">Payment Integration</p>
            </div>
          </div>
        </div>
        <div className="lg:ml-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]">
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              className="p-6 text-center bg-yellow-500"
            >
              <p className="text-[50px] text-black font-bold">2</p>
              <p className="text-[20px] text-black font-600">
                Years Experience
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              data-aos-delay="200"
              className="p-6 text-center bg-yellow-500"
            >
              <p className="text-[50px] text-black font-bold">100+</p>
              <p className="text-[20px] text-black font-600">
                Satistified Clients
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              data-aos-delay="400"
              className="p-6 text-center bg-yellow-500"
            >
              <p className="text-[50px] text-black font-bold">200+</p>
              <p className="text-[20px] text-black font-600">
                Projects Completed
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              data-aos-delay="600"
              className="p-6 text-center bg-yellow-500"
            >
              <p className="text-[50px] text-black font-bold">2+</p>
              <p className="text-[20px] text-black font-600">Award Won</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
