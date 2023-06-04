import React from "react";

export default function button() {
  return (
    <div>
      <a
        href="https://www.figma.com/community/plugin/1197376201235364148/Figma-to-HTML%2FCSS-Code"
        className="relative inline-flex items-center justify-center p-2 lg:p-4 px-8 lg:px-12 py-3 lg:py-4 overflow-hidden font-medium  transition duration-300 ease-out rounded-xl shadow-xl group "
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-700 via-gray-900 to-black"></span>
        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-black rounded-full opacity-30 group-hover:rotate-90 ease"></span>
        <span className="relative text-white font-bold font-sans">
          Download
        </span>
      </a>
    </div>
  );
}
