import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Card } from "./components/UI/Card";
import { useNav } from "./context/NavContext";
export default function Layout() {
  const { rotation } = useNav();
  return (
    <section className="flex flex-col text-white w-screen h-screen flex-initial bg-back-color">
      <div className="w-full h-16 md:flex hidden">
        <Navbar />
      </div>

      <div className="w-full relative h-full overflow-hidden">
        <div className="w-44 h-44 rounded-full bg-gradient-to-t rotate-12 from-[#09429e] to-[#E15656] flex justify-center items-center absolute -left-24">
          <div className="w-32 h-32 rounded-full bg-[#af47d2]"></div>
        </div>
        <div className="w-44 h-44 rounded-full bg-gradient-to-t rotate-12 from-[#09429e] to-[#E15656] hidden max-md:flex justify-center items-center absolute -right-24">
          <div className="w-32 h-32 rounded-full bg-[#af47d2]"></div>
        </div>

        <div className="w-20 h-20 rounded-full bg-gradient-to-t rotate-12 from-[#09429e] to-[#E15656] hidden max-md:flex justify-center items-center absolute right-24 bottom-5">
          <div className="w-10 h-10 rounded-full bg-[#51c8e69c]"></div>
        </div>

        <div className="w-20 h-20 rounded-full bg-gradient-to-t rotate-12 from-[#09429e] to-[#E15656] hidden max-md:flex justify-center items-center absolute left-5 bottom-5">
          <div className="w-10 h-10 rounded-full bg-[#51c8e69c]"></div>
        </div>
        
        <div className="w-20 h-20 rounded-full bg-gradient-to-t rotate-12 from-[#09429e] to-[#E15656] hidden max-md:flex justify-center items-center absolute right-24 top-20">
          <div className="w-10 h-10 rounded-full bg-[#51c8e69c]"></div>
        </div>
        <div
          className="hidden w-[50rem] h-[50rem] absolute -right-40 -bottom-32 border-8 border-[#af47d2] md:flex justify-center items-center rounded-full transition-transform duration-500 ease-in-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <div className=" w-[45rem] relative h-[45rem] flex justify-center items-center rounded-full bg-disk-color">
            <div className="absolute -left-[6rem] top-[4rem] z-10">
              <Card
                number="3516 8643 7614 9242"
                holderName="Joshua Cash"
                expireDate="11/27"
                degree={15}
              />
            </div>
            <div className="absolute -left-[10rem] top-[18rem] z-1">
              <Card
                degree={-15}
                number="5136 7541 0873 0029"
                expireDate="09/24"
                holderName="Sarah Gold"
              />
            </div>

            <div className="bg-disk-color left-56  absolute w-16 h-16  rounded-full shadow-xl">
              <div className="relative rounded-full left-1 top-1 bg-[#af47d2] w-6 h-6 translate-x-4 translate-y-4"></div>
            </div>
          </div>
        </div>
        <div className="w-full relative h-full z-50">
          <Outlet />
        </div>
      </div>

      <div className="w-full h-16 max-md:block hidden">
        <Navbar />
      </div>
    </section>
  );
}
