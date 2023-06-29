import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Design } from "@/typings";
import urlFor from "@/sanity/lib/image";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

type Props = {
  design: Design;
  directionLeft?: boolean;
};

const DesignWorkCard = ({ design, directionLeft }: Props) => {
  let [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <motion.div
      initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="relative flex flex-col items-center cursor-pointer p-6 bg-slate-400/10 overflow-hidden"
    >
      <div className="flex flex-col items-start">
        <div className="border border-gray-500/40 rounded-md p-4">
          <img
            src={urlFor(design.image).url()}
            alt="project-image"
            className="object-cover rounded-2xl hover:scale-105 ease-in-out transition-all duration-500 filter hover:grayscale"
            onClick={openModal}
          />
        </div>

        <Dialog
          open={isOpen}
          onClose={closeModal}
          className="fixed inset-0 z-10 overflow-y-auto w-screen h-screen  flex justify-center items-center"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black/30" />
          <Dialog.Panel className="flex items-center justify-center min-h-screen">
            <div className="max-w-7xl max-h-full">
              <img
                src={urlFor(design.image).url()}
                alt="Image"
                className="max-w-lg md:max-w-7xl max-h-screen object-cover p-20"
              />
            </div>
          </Dialog.Panel>
        </Dialog>

        <div className="flex flex-row py-4">
          <h3 className="text-gray-500 text-lg font-semibold uppercase mr-3 hover:scale-105 ease-in-out transition-all duration-500">
            {design.title}
          </h3>
          <ArrowTopRightOnSquareIcon className="animate-pulse text-[#f7ab0a] h-7 w-7" />
        </div>
      </div>
    </motion.div>
  );
};

export default DesignWorkCard;
