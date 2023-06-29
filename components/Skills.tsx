import React from "react";
import { motion } from "framer-motion";
import SkillComp from "./Skill";
import { Skill as SkillType } from "@/typings";

type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  //console.log(skills);
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
      className="min-h-screen flex relative flex-col justify-center items-center"
    >
      <h3 className="uppercase absolute tracking-widest text-gray-500 text-2xl mb-4 top-24">
        Skills
      </h3>

      <h3 className="uppercase absolute tracking-wider text-gray-500 text-sm mb-8 top-36">
        Hover over a skill
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skills.map((skill) => (
          <SkillComp key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
