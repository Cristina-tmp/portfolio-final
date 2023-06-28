import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

const DesignWorkCard = ({ directionLeft }: Props) => {
  return (
    <motion.div
      initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="relative flex flex-col items-center cursor-pointer p-6 bg-slate-400/10"
    >
      <div className="flex flex-col items-start">
        <div className="border border-gray-500/40 rounded-md p-4">
          <img
            src="https://saigontechnology.com/assets/media/web-design-and-development-checklist.svg"
            alt="project-image"
            className="object-cover rounded-2xl hover:scale-105 ease-in-out transition-all duration-500 filter hover:grayscale"
          />
        </div>
        <div className="flex flex-row py-4">
          <h3 className="text-gray-500 text-lg font-semibold uppercase mr-3 hover:scale-105 ease-in-out transition-all duration-500">
            Project 1
          </h3>
          <ArrowTopRightOnSquareIcon className="animate-pulse text-[#f7ab0a] h-7 w-7" />
        </div>
      </div>
    </motion.div>
  );
};

export default DesignWorkCard;
