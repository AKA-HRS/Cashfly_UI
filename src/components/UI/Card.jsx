import React from "react";
import "./Card.css";
import chip from "../../assets/chip.svg";
import visa from "../../assets/visa.svg";

export function Card({ number, holderName, expireDate, degree }) {
  return (
    <div
      className="card w-[26rem] h-60 p-5 flex flex-col animate-float-and-rotate"
      style={{
        "--degree": `${degree}deg`,
      }}
    >
      <div className="flex justify-between">
        <img src={chip} alt="" className="w-12 bg-clip-text text-transparent" />
        <img src={visa} alt="" className="w-14" />
      </div>
      <div className=" w-full h-8 flex items-center justify-start text-lg font-bold mt-8">
        <p>{number}</p>
      </div>
      <div className="flex justify-between items-center mt-9 relative">
        <div className=" flex flex-col justify-start items-start">
          <p className="text-xs">CARD HOLDER</p>
          <p className="font-bold text-xl">{holderName}</p>
        </div>
        <div className=" flex flex-col justify-start items-start">
          <p className="text-xs">EXPIRES</p>
          <p className="font-bold text-xl">{expireDate}</p>
        </div>
      </div>
    </div>
  );
}
