import React from "react";
import TypewriterEffect from "./helper/TypewriterEffect";
import img from "../public/images/man3.jpg";
import Image from "next/image";
import Link from "next/link"; // Importing Link from next/link

const Hero = () => {
  return (
    <div className="w-[100vw] pt-[4vh] md:pt-[12vh] h-[85vh] md:h-[100vh] custom-bg">
      <div className="flex justify-center flex-col w-[80%] h-[100%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center">
          <div>
            <h1 data-aos="fade-right" className="text-[#c4cfde] mb-[1.3rem]">
              LETS WORK TOGETHER
            </h1>
            <div>
              <h1
                data-aos="fade-left"
                data-aos-delay="400"
                className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-semibold leading-[2.6rem] text-white"
              >
                My Name is <span className="text-yellow-300">Karichu</span>
              </h1>
              <TypewriterEffect />
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay="800"
              className="mt-[1.2rem] text-[15px] md:text-[17px] text-[#c4cfde]"
            >
              I am a versatile developer skilled in both frontend and backend
              technologies. With expertise in HTML, CSS, JavaScript, and
              frameworks like React for frontend development, and proficiency in
              Node.js, Python, and databases for backend, I create seamless,
              efficient, and visually appealing web applications that deliver
              exceptional user experiences.
            </p>
            <div className="mt-[3rem] sm:mt-[6rem] flex items-center space-x-6">
              <Link href="#contact">
                <button
                  data-aos="zoom-in"
                  data-aos-delay="1200"
                  className="relative flex h-[50px] w-40 items-center justify-center font-semibold
                    overflow-hidden bg-blue-500 text-white shadow-2xl transition-all before:absolute before:h-0
                    before:w-0 before:rounded-full before:bg-green-600 before:duration-500 before:ease-out hover:before:h-56
                    hover:before:w-56 rounded-sm"
                >
                  <span className="relative z-10">Hire Me</span>
                </button>
              </Link>
              <a
                href="/resume.pdf" // Path to your CV file
                download // The download attribute triggers the download
                data-aos="zoom-out"
                data-aos-delay="1600"
                className="relative flex h-[50px] w-40 items-center justify-center font-semibold
                overflow-hidden bg-orange-500 text-white shadow-2xl transition-all before:absolute before:h-0
                before:w-0 before:rounded-full before:bg-green-600 before:duration-500 before:ease-out hover:before:h-56
                hover:before:w-56 rounded-sm"
              >
                <span className="relative z-10">Download Resume</span>
              </a>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="2000"
            className="hidden md:block"
          >
            <Image
              src={img}
              alt="hero"
              width={600}
              height={600}
              className="object-contain rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
