"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BlinkingText from "./BlinkingText";

const NeonText = () => {
  const controls = useAnimation();

  const startBlinkAnimation = async () => {
    while (true) {
      await controls.start({ opacity: 0.8 });
      await controls.start({ opacity: 1 });
      await controls.start({ opacity: 0.8 });
      await controls.start({ opacity: 1 });
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  };

  useEffect(() => {
    startBlinkAnimation();
  }, []);

  const neonTextStyle = {
    color: "white",
    textShadow:
      "0 0 10px #902bf5, 0 0 20px #902bf5, 0 0 30px #902bf5, 0 0 40px #902bf5, 0 0 70px #902bf5, 0 0 80px #902bf5, 0 0 100px #902bf5, 0 0 150px #902bf5",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      style={neonTextStyle}
      className="text-4xl font-bold"
    >
      <BlinkingText />
    </motion.div>
  );
};

export default NeonText;
