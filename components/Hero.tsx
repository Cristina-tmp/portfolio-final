import React from "react";
import { motion } from "framer-motion";
import NeonText from "@/components/NeonText";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "@/typings";
import urlFor from "@/sanity/lib/image";
//import { urlForImage } from "@/sanity/lib/image";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  //console.log(pageInfo);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center min-h-screen relative "
    >
      <h2 className="text-sm text-gray-500 uppercase tracking-[15px] pb-20">
        Digital Marketing | Web Development
      </h2>
      <Image
        //src="https://i.imgur.com/mPGaWLc.gif"
        src={urlFor(pageInfo.profilePic).url()}
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        width={128}
        height={128}
        alt="pfp"
      />
      <NeonText />

      <p className="text-lg text-white capitalize font-light tracking-widest">
        I Create{" "}
        <span className="tracking-widest font-semibold capitalize underline decoration-yellow-400">
          Artistic & profitable
        </span>{" "}
        Websites.
      </p>
      <div className="pt-5">
        <Link href="#about">
          <button className="heroButton tracking-widest">About</button>
        </Link>

        <Link href="#skills">
          <button className="heroButton tracking-widest">Skills</button>
        </Link>

        <Link href="#projects">
          <button className="heroButton tracking-widest">Projects</button>
        </Link>

        <Link href="#contact">
          <button className="heroButton tracking-widest">Contact</button>
        </Link>
      </div>
      <a
        href="#projects"
        className="px-6 py-3 mt-8 text-lg font-bold text-white bg-[#f5902b] rounded transition-colors"
      >
        My Work
      </a>
    </motion.div>
  );
};

export default Hero;
