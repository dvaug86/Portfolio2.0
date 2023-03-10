import Image from "next/image";
import React from "react";
import reactTetris from "../public/assets/projectImgs/reactTetris.png";
import { RiRadioButtonFill } from "react-icons/ri";
import { motion } from "framer-motion";
import Link from "next/link";

const tetris = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ type: "Inertia",  duration: 1 }}
      animate={{ x: 100 }}
      variants={{
        hidden: { opacity: 0, x: -500 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <div className="w-full">
        <div className="w-screen h-[50vh] relative">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
          <div className={"image-container"}>
            <Image
              className="absolute z-1"
              layout="fill"
              objectFit="cover"
              src={reactTetris}
              alt="/"
            />
          </div>
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Tetris with React</h2>
            <h3>React / JavaScript / CSS </h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <p className="">Project</p>
            <h2>Overview</h2>
            <p>
              I found this tutorial on Youtube and really enjoyed it. It was
              much more involved with React than any project that I have done in
              the past and gave me an even better feel for out it works. My next
              goal is to add a database to log high scores.{" "}
            </p>
            <button
              className="px-8 py-2 mt-4 mr-8"
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://bespoke-snickerdoodle-773d67.netlify.app/";
              }}
            >
              Website
            </button>
            <button
            target=""
              className="px-8 py-2 mt-4 mr-8"
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://github.com/dvaug86/tetris_react";
              }}
            >
              Git Repo
            </button>
          </div>
          <div className="col-span-4 md:col-span-1   p-4 h-auto shadow-xl shadow-gray-400 border-8 border-blue-500 rounded-xl lg:p-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.7, duration: 0.75 }}
                  variants={{
                    hidden: { opacity: 0, y: -100 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" />
                    React
                  </p>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.9, duration: 0.75 }}
                  variants={{
                    hidden: { opacity: 0, y: -100 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" />
                    JavaScript
                  </p>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 1.1, duration: 0.75 }}
                  variants={{
                    hidden: { opacity: 0, y: -100 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" />
                    CSS
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          <Link href="/#projects">
            <p className="underline cursor-pointer">Back</p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default tetris;
