import React from "react";
import logo from "../assets/saturn.png";
import { useNav } from "../context/NavContext";
export default function Navbar() {
  const {setActive,setRotation} = useNav()

  const handelOnClick = (to,rotate) =>{
    setActive(to);
    setRotation(rotate)
  }
  return (
    <div className="w-full h-full flex justify-between items-center px-10 max-md:p-1">
     
      <div onClick={()=>handelOnClick("/")} className="h-full cursor-pointer w-36 flex justify-center space-x-2 items-center font-bold">
        <img
          src={logo}
          alt="cashfly"
          className="w-8 h-8 saturate-0 invert rotate-12"
        />
        <p>cashfly</p>
      </div>

      <div className="w-96 h-full flex justify-evenly font-bold items-center">
        <button className="after:content-[''] after:block after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full" onClick={()=>handelOnClick("/","0")}>Home</button>
        <button className="after:content-[''] after:block after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full" onClick={()=>handelOnClick("about","10")}>About</button>
        <button className="after:content-[''] after:block after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full" onClick={()=>handelOnClick("products","30")}>Product</button>
        <button className="after:content-[''] after:block after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full" onClick={()=>handelOnClick("pricing","60")}>Pricing</button>
        <button className="after:content-[''] after:block after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full max-md:block hidden" onClick={()=>handelOnClick("signup")}>Sign up</button>

        <button onClick={()=>handelOnClick("signup","180")} className="border-2 hidden md:block w-32 h-12 rounded-full relative">
          Sign up
        </button>

      </div>
    </div>
  );
}

