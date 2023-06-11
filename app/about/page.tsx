/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/headers";
export default function page() {
  const [animationClass, setAnimationClass] = useState("");
  const [randomPath, setRandomPath] = useState("");

  useEffect(() => {
    const paths = [
      "translateX(100px) translateY(-100px)", // Example random paths
      "translateX(-50px) translateY(50px)",
      "translateX(200px) translateY(-150px)"
    ];

    const randomIndex = Math.floor(Math.random() * paths.length);
    const path = paths[randomIndex];

    setRandomPath(path);

    const timeout = setTimeout(() => {
      setAnimationClass("animate");
    }, 1000); // Delay before starting the animation

    return () => clearTimeout(timeout);
  }, []);
  return (
    <main className="px-8 md:px-20 lg:px-32 py-6 lg:py-8 overflow-x-hidden ">
      {/* NavBar */}
      <Header />
      <div
        className={`bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500 w-[100px] lg:w-[600px] h-[200px] opacity-40 blur-2xl top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto absolute ${animationClass}`}
        style={{ transform: randomPath }}
      ></div>
      <div
        className={`bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500 w-[100px] lg:w-[600px] h-[200px] opacity-40 blur-2xl top-[800px] left-0 transform  absolute ${animationClass}`}
        style={{ transform: randomPath }}
      ></div>

      <section className="text-gray-600 body-font">
        <div className="container lg:pr-40 py-40 mx-auto">
          <div className=" w-full mx-auto text-left">
            <p className="leading-relaxed text-base lg:text-2xl text-left font-bold text-gray-700 font-sans">
              We buiding this product for frontend developer, you must know that
              generating code from the design is a long and tiresome work.
              DevBeans will offer a tool to convert the figma design into
              react+tailwind code easily. This tool can save tons of hours for
              frontend developers!
            </p>
            <span className="inline-block h-1 w-10 rounded bg-yellow-500 mt-12 mb-6"></span>
            <h2 className="text-gray-900 font-bold title-font tracking-wider text-sm lg:text-xl font-sans">
              --Sumit Kumar
            </h2>
            <p className="text-gray-500 font-sans">Founder, DevBeans</p>
          </div>
        </div>
      </section>
    </main>
  );
}
