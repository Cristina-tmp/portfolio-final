import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { Project as ProjectType } from "@/typings";
import Link from "next/link";

type Props = {
  projects: ProjectType[];
};

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="relative flex flex-col justify-center items-center mx-8 overflow-x-hidden snap-y snap-mandatory  "
    >
      <h3 className="uppercase absolute top-24 tracking-[20px] text-white text-md break-words sm:text-2xl z-20 ml-10">
        Web Design & Development
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-44 md:mt-40 overflow-y-scroll snap-y snap-mandatory">
        {projects?.map((project) => (
          <Link href={project.linkToBuild} passHref={true} key={project._id}>
            <ProjectCard key={project._id} project={project} />
          </Link>
        ))}
      </div>
      {/* cards */}
    </motion.div>
  );
};

export default Projects;
