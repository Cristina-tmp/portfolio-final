import React from "react";
import DesignWorkCard from "./DesignWorkCard";
import { motion } from "framer-motion";

type Props = {};

const DesignWork = (props: Props) => {
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
      className="relative flex flex-col justify-center items-center mx-8 overflow-x-hidden"
    >
      <h3 className="uppercase absolute top-24 tracking-[20px] text-gray-500 text-2xl z-20">
        Copywriting
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-44 md:mt-40">
        <DesignWorkCard />
        <DesignWorkCard />
        <DesignWorkCard />
        <DesignWorkCard />
      </div>
      {/* cards */}
    </motion.div>
  );
};

export default DesignWork;