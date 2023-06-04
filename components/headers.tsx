import React from "react";
import Image from "next/image";
import Link from "next/link";

function Headers() {
  return (
    <div className="">
      <nav className=" w-full  flex items-center justify-between mx-auto">
        <div className="h-full ">
          <Link href={"/"}>
            <Image src="/logo.png" width={"200"} height="200" alt="logo" />
          </Link>
        </div>
        <div className="flex items-center gap-8 flex-row">
          <a
            href="https://twitter.com/ranga_lab"
            className="font-lg font-bold leading-normal tracking-normal font-sans cursor-pointer hidden lg:visible"
          >
            Contact
          </a>

          <a
            href="https://www.figma.com/community/plugin/1197376201235364148/Figma-to-HTML%2FCSS-Code"
            className="relative inline-flex items-center justify-center p-2 lg:p-4 px-8 lg:px-12 py-3 lg:py-4 overflow-hidden font-medium  transition duration-300 ease-out rounded-xl shadow-xl group "
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300"></span>
            <span className="absolute bottom-0 right-0 block w-60 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-gray-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative text-black font-bold font-sans">
              Download
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Headers;
