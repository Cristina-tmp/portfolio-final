import React from "react";
import { motion } from "framer-motion";
import { Skill } from "@/typings";
import urlFor from "@/sanity/lib/image";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

const SkillComp = ({ skill, directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill.image).url()}
        alt="sanity logo"
        className="rounded-full border border-gray-500  object-cover w-20 h-20 xl:w-32 xl:h-32 filter group-hover:grayscale  transition duration-300 ease-in-out  "
      />
    </div>
  );
};

export default SkillComp;
