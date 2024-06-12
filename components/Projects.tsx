import React from "react";
import ProjectCard from "./helper/ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="text-center">
        <p className="heading__mini">Recent Works</p>
        <h1 className="heading__primary">
          My best <span className="text-yellow-300">Projects</span>
        </h1>
      </div>
      <div data-aos="flip-left" data-aos-anchor-placement="top-center">
        <ProjectCard
          title="E-commerce Website"
          tech1="React"
          tech2="Next Js"
          tech3="Tailwind"
          tech4="Typescript"
          image="/images/sp3.jpg"
        />
      </div>
      <div
        data-aos="flip-left"
        data-aos-anchor-placement="top-center"
        data-aos-delay="200"
      >
        <ProjectCard
          title="Portfolio Website"
          tech1="React"
          tech2="Next Js"
          tech3="Tailwind"
          tech4="Typescript"
          image="/images/sp5.jpg"
        />
      </div>
      <div
        data-aos="flip-left"
        data-aos-anchor-placement="top-center"
        data-aos-delay="400"
      >
        <ProjectCard
          title="Food Delivery Website"
          tech1="React"
          tech2="Node Js"
          tech3="MongoDb"
          tech4="Typescript"
          image="/images/sp7.jpg"
        />
      </div>
      <div
        data-aos="flip-right"
        data-aos-anchor-placement="top-center"
        data-aos-delay="600"
      >
        <ProjectCard
          title="Travel Website"
          tech1="React"
          tech2="Node Js"
          tech3="Tailwind"
          tech4="Typescript"
          image="/images/sp10.jpg"
        />
      </div>
    </div>
  );
};

export default Projects;
