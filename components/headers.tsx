import React from "react";
import Image from "next/image";
import Link from "next/link";

function Headers() {
  return (
    <div className="">
      <nav className=" w-full  flex items-center justify-between mx-auto">
        <div className="h-full ">
          <Link href={"/"}>
            <h1 className="text-lg font-semibold font-sans">DevBeans</h1>
          </Link>
        </div>
        <div className="flex items-center gap-4 lg:gap-8 flex-row">
          {/* <Link href={"/about"}>
            <p className="tex-sm lg:text-normal font-normal lg:font-semibold text-black hover:text-gray-800 hover:underline duration-75  leading-normal tracking-normal font-sans cursor-pointer  ">
              About
            </p>
          </Link> */}

          <a
            href="https://www.figma.com/community/plugin/1197376201235364148/Figma-to-HTML%2FCSS-Code"
            className="relative inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition ease-in-out delay-150 duration-200 p-2 lg:p-4 font-sans px-3 lg:px-6 py-2 lg:py-2 overflow-hidden font-semibold   rounded-3xl  group "
          >
            <span className="relative text-black tex-sm lg:text-normal font-semibold font-sans">
              Download
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Headers;
