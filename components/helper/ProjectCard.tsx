import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  title: string;
  tech1: string;
  tech2: string;
  tech3: string;
  tech4: string;
}

const descriptionMapping: Record<string, string> = {
  "E-commerce Website":
    "I developed a robust e-commerce website featuring a user-friendly interface, secure payment options, and seamless browsing. The platform supports efficient product management, real-time inventory tracking, and personalized user experiences, ensuring a smooth and engaging shopping journey for all customers.",
  "Portfolio Website":
    "I created a dynamic portfolio website showcasing my projects and skills. The site features an intuitive design, interactive elements, and responsive layouts. It effectively highlights my professional achievements, offering potential clients and employers an engaging and comprehensive view of my expertise.",
  "Food Delivery Website":
    "I developed a comprehensive food delivery website with an intuitive interface and efficient navigation. The platform features real-time order tracking, secure payment options, and personalized restaurant recommendations, ensuring a seamless and enjoyable experience for users ordering their favorite meals.",
  "Travel Website":
    "I built an immersive travel website featuring an intuitive design and seamless navigation. The platform offers comprehensive travel packages, real-time booking options, and personalized recommendations, ensuring users enjoy a hassle-free experience planning and booking their perfect vacation.",
};

const ProjectCard: React.FC<Props> = ({
  image,
  title,
  tech1,
  tech2,
  tech3,
  tech4,
}) => {
  const description =
    descriptionMapping[title] || "default project description";
  return (
    <div className="grid w-[80%] mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div
        className="p-4 rounded-xl relative cursor-pointer hover:-rotate-6 transform transition-all
      duration-200 bg-gray-800 shadow-md"
      >
        <Image
          src={`${image}`}
          alt={title}
          width={500}
          height={500}
          className="object-contain rounded-xl
        mx--auto shadow-md"
        />
      </div>
      <div>
        <h1 className="text-[25px] text-white">{title}</h1>
        <p className="text-white opacity65 text-[15px] mt-[1rem]">
          {description}
        </p>
        <div className="mt-[1.3rem] grid-cols-2 grid sm:grid-cols-3 xl:grid-cols-4 gap-[2rem]">
          <h1 className="px-6 py-3 bg-blue-700 text-white rounded-lg text-center">
            {tech1}
          </h1>
          <h1 className="px-6 py-3 bg-white text-black rounded-lg text-center">
            {tech2}
          </h1>
          <h1 className="px-6 py-3 bg-sky-400 text-black rounded-lg text-center">
            {tech3}
          </h1>
          <h1 className="px-6 py-3 bg-blue-500 text-white rounded-lg text-center">
            {tech4}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
