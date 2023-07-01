import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "@/typings";
type Inputs = {
  name: string;
  email: string;
  message: string;
  subject: string;
};

type Props = {
  pageInfo: PageInfo;
};

function Contact({ pageInfo }: Props) {
  //console.log(pageInfo[0].phoneNumber);
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:cristinazhouq@gmail.com?subject=${formData.subject}&body=Hi, My name is ${formData.name}. ${formData.message} (Sent from ${formData.email}))`;
  };
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
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row justify-evenly items-center mx-4"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-8">
        <h4 className="text-lg sm:text-2xl font-semibold tracking-[10px] text-center mt-8 pt-4 text-white">
          {`Let's Talk`}
        </h4>

        <div className="relative flex flex-col items-center space-y-4 mx-auto">
          <div className="flex items-center justify-center space-x-5 ">
            <PhoneIcon className="animate-pulse text-[#f7ab0a] h-7 w-7" />
            <p className="text-lg sm:text-2xl text-gray-500">
              {pageInfo.phoneNumber}
            </p>
          </div>

          <div className="flex items-center justify-center space-x-5 ">
            <EnvelopeIcon className="animate-pulse text-[#f7ab0a] h-7 w-7" />
            <p className="text-lg sm:text-2xl text-gray-500">
              {pageInfo.email}
            </p>
          </div>

          <div className="flex items-center justify-center space-x-5 ">
            <MapPinIcon className="animate-pulse text-[#f7ab0a] h-7 w-7" />
            <p className="text-lg sm:text-2xl text-gray-500">
              {pageInfo.address}
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="flex flex-col w-full space-y-3 sm:mx-auto"
          >
            {/* Adjusted width using max-w-2xl */}
            <div className="flex flex-col sm:flex-row sm:space-x-2  ">
              <input
                {...register("name")}
                placeholder="Name"
                className="contactInput sm:h-15 mb-4 sm:mb-0"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="contactInput sm:h-15"
                type="email"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput"
            />
            <button
              className="tracking-wide rounded-md text-black text-xl font-bold bg-[#f7ab0a] py-4 px-10 hover:bg-[#f5902b] transition-colors "
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
