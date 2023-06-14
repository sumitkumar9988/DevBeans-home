"use client";
/* eslint-disable react/jsx-key */
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState, ChangeEvent } from "react";
import Lottie from "lottie-react";
import Header from "../components/headers";
import demo from "./../data/demo.json";

const supabaseUrl: string = "https://dnflmwpentrmpauuzrns.supabase.co";
const supabaseKey: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuZmxtd3BlbnRybXBhdXV6cm5zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4Njc0MTk4MiwiZXhwIjoyMDAyMzE3OTgyfQ.fm2wKs7nCUreFmT9w-aiA5IEEsdTs8R4y7Me5izflxg";
const supabase = createClient(supabaseUrl, supabaseKey);

const copy = {
  heading: "Simple & Fast Figma to React Component",
  subHeading:
    "The faster way to create production quality code from beautiful designs in Figma.",
  button: {
    rating: "5* Rating",
    usage: "Used by over 11k+"
  },
  description:
    "If you are a frontend developer, you must know that generating code from the design is a long and tiresome work. DevBeans will offer a tool to convert the figma design into react+tailwind code easily. This tool can save tons of hours for frontend developers!",
  features: {
    heading: "The Ultimate Figma to React+Tailwind Code Converter",
    keyFeatures: [
      {
        heading: "Static Position and Flex Layout",
        description:
          " Our code generation tool ensures that the React components are created with static position and flex layout, providing a solid foundation for your designs. This enables you to achieve the desired layout and positioning for elements effortlessly."
      },
      {
        heading: "Clean and Reusable Code",
        description:
          " DevBeans generates clean and organized code that follows best practices, making it easy to read, understand, and maintain. The reusable components help streamline your development process and promote code consistency throughout your project."
      },
      {
        heading: "Image, Icon, and Font Integration",
        description:
          "DevBeans seamlessly integrates images, icons, and fonts from your Figma design into the generated React code. Whether it's adding images, Icons, or implementing custom fonts, our tool handles it all effortlessly."
      }
    ]
  },
  cta: {
    badge: "Just copy and past",
    title: "Write UI code faster !"
  }
};

export default function Home() {
  const [animationClass, setAnimationClass] = useState("");
  const [randomPath, setRandomPath] = useState("");
  const [email, setEmail] = useState("");

  console.log(email);

  const submitEmail = async () => {
    console.log("email", email);
    let { data, error } = await supabase
      .from("Waitlist")
      .insert([{ email: email }]);

    if (error) {
      setEmail("");
    } else {
      setEmail("");
    }
  };

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
    <>
      <main className="px-6 md:px-20 lg:px-32 py-6 lg:py-8 overflow-x-hidden ">
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
        {/* Header */}
        <header className="flex flex-col pt-36 gap-6 lg:gap-8   w-full md:10/12 lg:w-8/12 ">
          <div className="block font-extrabold text-3xl md:text-4xl lg:text-7xl    font-sans  leading-snug tracking-normal lg:leading-snug lg:tracking-normal text-start">
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-blue-200">
              Love Frontend ?
            </span>
            <br />
            <span className="text-gray-900">We Make it Easier </span>
          </div>
          <div className="font-sm lg:font-normal text-gray-600 text-base  font-sans  w-full lg:w-8/12 tracking-wide leading-relaxed">
            {copy.subHeading}
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="flex flex-row items-start justify-center  gap-8 ">
              <a
                href="https://www.figma.com/community/plugin/1197376201235364148/Figma-to-HTML%2FCSS-Code"
                className="relative inline-flex items-center justify-center hover:bg-gray-700 bg-black transition ease-in-out delay-150 duration-200  font-sans px-4 lg:px-12 py-2 lg:py-3 overflow-hidden font-semibold   rounded-full  group  cursor-pointer"
              >
                <span className="relative text-sm text-white font-semibold font-sans">
                  Download
                </span>
              </a>
            </div>
            <p className="text-gray-600 font-normal texts-sm pt-4 font-sans">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FFD700"
                  stroke="#FFD700"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  className="w-8 h-8 inline-block stroke-[]"
                >
                  <path
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
              </span>{" "}
              <span className="inline-block">{copy.button.usage}</span>
            </p>
          </div>
        </header>
        <div className="flex flex-col w-full justify-center items-center py-12 lg:pt-32 lg:pb-20 h-[400px] lg:h-[800px]">
          <Lottie
            animationData={demo}
            className="flex justify-center items-center"
            loop={true}
          />
        </div>

        {/* About */}

        <div className=" lg:pt-48 pt-12 pb-20 lg:pb-28">
          <div className="flex flex-col gap-6 lg:gap-12 items-start justify-start">
            <input
              className="text-2xl lg:text-5xl font-normal font-sans placeholder-gray-200 focus:outline-none"
              placeholder="Enter Email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <div className="flex flex-row items-start justify-center  gap-8 ">
              <div
                onClick={submitEmail}
                className="relative inline-flex items-center justify-center hover:bg-gray-700 bg-black transition ease-in-out delay-150 duration-200  font-sans px-4 lg:px-12 py-2 lg:py-3 overflow-hidden font-semibold   rounded-full  group  cursor-pointer"
              >
                <span className="relative text-white text-sm  font-semibold font-sans">
                  Join our Newsletter
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:pt-48 pt-40 ">
          <div className=" border-[.3px] "></div>
          <div className="py-4 pt-8">
            <div className="flex justify-between w-full flex-row">
              <div className="flex flex-col gap-2 ">
                <p className="text-base text-gray-600 font-medium font-sans ">
                  © 2023 DevBeans.
                </p>
                <a href="https://twitter.com/Sumit_r9988">
                  <p className="text-base text-gray-600 font-medium font-sans ">
                    <span>Made by</span>{" "}
                    <span className="text-black">Sumit</span>
                  </p>
                </a>
              </div>
              <a href="https://twitter.com/DevBeansHQ">
                <div className="p-2 bg-gray-200 rounded-lg cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />{" "}
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/*  */}
      </main>
    </>
  );
}
