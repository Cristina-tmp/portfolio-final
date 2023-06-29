import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const BlinkingText = () => {
  const [text] = useTypewriter({
    words: [
      "Hi, I'm Cristina",
      "Web Designer, Developer, and digital marketer",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const controls = useAnimation();

  useEffect(() => {
    const startBlinkAnimation = async () => {
      while (true) {
        if (controls) {
          await controls.start({ opacity: 0.8 });
          await controls.start({ opacity: 1 });
          await controls.start({ opacity: 0.8 });
          await controls.start({ opacity: 1 });
          await new Promise((resolve) => setTimeout(resolve, 2000));
        }
      }
    };

    startBlinkAnimation();
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      className="text-4xl font-bold"
    >
      <h1 className="text-5xl lg:text-6xl font-semibold px-10">{text}</h1>
      <Cursor cursorColor="#f7ab0a" />
    </motion.div>
  );
};

export default BlinkingText;
