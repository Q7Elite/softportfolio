import React from "react";
import SkillCard from "./helper/SkillCard";
// import img from "../public/images/sp1.jpg";

const Skills = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
      <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center">
        <div className="col col-span-3">
          <p className="heading__mini">My Skills</p>
          <h1 className="heading__primary">
            Let&apos;s Explore Popular{" "}
            <span className="text-yellow-300">Skills</span> & Experience
          </h1>
          <p className="text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem]">
            I specialize in full-stack web development, proficient in HTML, CSS,
            JavaScript, and frameworks like React for frontend, alongside
            Node.js and Python for backend. My expertise ensures seamless,
            efficient, and visually appealing web applications tailored to
            client needs.
          </p>
          <button
            className="relative flex h-[50px] w-40 items-center justify-center font-semibold
              overflow-hidden bg-blue-500 text-white shadow-2xl transition-all before:absolute before:h-0
              before:w-0 before:rounded-full before:bg-green-600 before:duration-500 before:ease-out hover:before:h-56
              hover:before:w-56"
          >
            <span className="relative z-10">Learn More</span>
          </button>
        </div>
        <div className="col-span-4">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 
           gap-[1rem] items-center"
          >
            <div data-aos="flip-left" data-aos-anchor-placement="top-center">
              <SkillCard
                title="React"
                image="/images/react.svg"
                percent="90%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="200"
            >
              <SkillCard title="CSS" image="/images/css.svg" percent="97%" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="400"
            >
              <SkillCard
                title="JS"
                image="/images/javascript.svg"
                percent="87%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="600"
            >
              <SkillCard
                title="TS"
                image="/images/typescript.svg"
                percent="62%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="800"
            >
              <SkillCard title="HTML" image="/images/html.svg" percent="88%" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="1000"
            >
              <SkillCard
                title="NodeJs"
                image="/images/nodejs.svg"
                percent="68%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="1200"
            >
              <SkillCard
                title="MDB"
                image="/images/mongodb.svg"
                percent="78%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="1400"
            >
              <SkillCard
                title="Python"
                image="/images/python.svg"
                percent="53%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
