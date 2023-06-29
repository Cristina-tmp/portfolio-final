import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Project } from "@/typings";
import urlFor from "@/sanity/lib/image";
import Link from "next/link";

type Props = {
  project: Project;
  directionLeft?: boolean;
};

const ProjectCard = ({ project, directionLeft }: Props) => {
  return (
    <motion.div
      initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="relative flex flex-col items-center cursor-pointer p-6 bg-slate-400/10 snap-x snap-mandatory"
    >
      <div className="flex flex-col items-start">
        <div className="border border-gray-500/40 rounded-md p-4">
          <img
            src={urlFor(project.image).url()}
            alt="project-image"
            className="object-cover rounded-2xl hover:scale-105 ease-in-out transition-all duration-500 filter hover:grayscale"
          />
        </div>

        <div className="flex flex-row items-start py-4">
          <h3 className="text-gray-500 flex-shrink-0 text-lg font-semibold uppercase mr-3 hover:scale-105 grayscale hover:grayscale-0 ease-in-out transition-all duration-500">
            {project.title}
          </h3>
          <ArrowTopRightOnSquareIcon className="animate-pulse text-[#f7ab0a] h-7 w-7 hover:scale-105" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
