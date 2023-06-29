import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import urlFor from "@/sanity/lib/image";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  //console.log(pageInfo.heroImage);
  // const imageUrl = pageInfo.profilePic
  //   ? urlForImage(pageInfo.profilePic).url()
  //   : null;
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center
   md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto"
    >
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        //src="https://elcomercio.pe/resizer/yHlVmeje9JdLEROBvNgsdoVpwRs=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/KRKOINCP7JGR7KWT4HNBDSJPDA.jpg"
        //src={urlFor(pageInfo.heroImage).url()}
        src={urlFor(pageInfo?.heroImage).url()}
        //src={imageUrl}
        alt="about photo"
        className="-mb-18 md:mb-0 flex-shrink-0 w-56 h-56 object-cover rounded-full md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[600px] "
      />

      <div className="space-y-10 px-0 md:px-10">
        <h2 className="text-5xl text-white ">
          Why <span className="underline decoration-[#f7ab0a]/50">Me</span> ?
        </h2>

        <p className="text-lg text-gray-500 whitespace-pre-line font-serif">
          🎨 Stunning Visuals: I help you create{" "}
          <span className="font-bold text-[#f7ab0a]">visually stunning </span>
          websites that generate sales and set you apart from the competition.{" "}
        </p>

        <p className="text-lg text-gray-500 whitespace-pre-line font-serif">
          {" "}
          🌟 Your Success is My Priority: When you choose to work with me,
          you&apos;re selecting a dedicated partner{" "}
          <span className="font-bold text-[#f7ab0a]">committed </span>
          to your success.{" "}
        </p>

        <p className="text-lg text-gray-500 whitespace-pre-line font-serif">
          {" "}
          🚀 Lead the Way: Specializing in web design and development, I&apos;m
          here to drive business growth and deliver consistent results for{" "}
          <span className="font-bold text-[#f7ab0a]">your brand. </span>
        </p>
      </div>
    </motion.div>
  );
};

export default About;
