import {
  BugAntIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CursorArrowRaysIcon,
  RocketLaunchIcon,
  ServerIcon,
} from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  title: string;
  num: string;
}

const iconMapping: Record<string, React.ElementType> = {
  "01": CommandLineIcon,
  "02": ServerIcon,
  "03": CodeBracketIcon,
  "04": CursorArrowRaysIcon,
  "05": RocketLaunchIcon,
  "06": BugAntIcon,
};

const descriptionMapping: Record<string, string> = {
  "01": "We offer dynamic, efficient, and responsive user interfaces, leveraging reusable components to streamline development and enhance performance.",
  "02": "Seamlessly integrate Mpesa payment solutions into your web applications for a smooth transaction experience.",
  "03": "Expert web deployment services to ensure your site is live, secure, and performing optimally.",
  "04": "Comprehensive school management systems that simplify administration and enhance educational experiences.",
  "05": "Tailored church management systems to streamline operations and enhance community engagement.",
  "06": "Full-featured e-commerce solutions to boost your online sales and provide excellent customer experiences.",
};

const ServiceCard: React.FC<Props> = ({ title, num }) => {
  const IconComponent = iconMapping[num] || CommandLineIcon;
  const description =
    descriptionMapping[num] || "Default description for services.";

  return (
    <div className="bg-black custom__service z-[100] relative transform rounded-2xl text-center p-6 shadow-md">
      <IconComponent className="w-[5rem] relative z-[1] mx-auto h-[5rem] text-yellow-500" />
      <h1 className="text-[25px] relative z-[1] text-white mt-[1rem]">
        {title}
      </h1>
      <p className="text-white text-[15px] opacity-60 mt-[0.8rem]">
        {description}
      </p>
      <p className="text-white text-[1.6rem] font-bold absolute top-3 right-4">
        {num}
      </p>
    </div>
  );
};

export default ServiceCard;
