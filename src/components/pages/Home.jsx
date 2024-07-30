import React from "react";
import download from "../../assets/download.svg";

export function Home() {
  return (
    <div className="w-full h-full flex flex-col space-y-6 p-8 md:p-28">
      <h1 className="text-6xl font-bold w-96 h-48 ">
        Paymets have never been easier
      </h1>
      <p className="w-96 h-16 text-sm">
        Discover the easiest way to manage your personal finances. Save,
        analyse, invest, withdraw, send and receive money all over the world
        with no limits!
      </p>
      <div className="flex w-80 h-16 justify-between items-center">
        <button
          type="button"
          className="w-32 h-12 rounded-full flex justify-center items-center font-bold bg-blue-600"
        >
          Get started
        </button>
        <button
          type="button"
          className="w-40 h-12 rounded-full flex justify-evenly items-center font-bold"
        >
          Download App <img src={download} alt="" className="w-6 h-6" />
        </button>
      </div>

      <div className="w-72 h-7 flex justify-evenly items-center">
        <p>Learn more about digital banking</p>
        <a
          href="https://www.slideteam.net/blog/top-10-digital-banking-ppt-templates-with-examples-and-samples"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:underline"
        >
          here
        </a>
      </div>
    </div>
  );
}
