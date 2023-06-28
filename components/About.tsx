import React from "react";
import { motion } from "framer-motion";

const About = () => {
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
      <h3 className="absolute top-20  uppercase tracking-[20px] text-gray-500 text-2xl xl:pl-14">
        About
      </h3>
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
        src="https://elcomercio.pe/resizer/yHlVmeje9JdLEROBvNgsdoVpwRs=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/KRKOINCP7JGR7KWT4HNBDSJPDA.jpg"
        alt="Rick about photo"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 object-cover rounded-full md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold ">
          About <span className="underline decoration-[#f7ab0a]/50">Me</span>
        </h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dicta
          itaque eveniet magni alias? Recusandae quis eveniet quibusdam pariatur
          voluptatibus quas illo adipisci veritatis aliquid consequatur itaque
          quae alias non magni impedit aspernatur dolore cumque culpa nisi,
          facere voluptatem exercitationem error? Omnis voluptatibus facilis
          vel, enim officia repudiandae cupiditate ducimus?
        </p>
      </div>
    </motion.div>
  );
};

export default About;
