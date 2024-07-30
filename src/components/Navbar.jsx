import React from "react";
import logo from "../assets/saturn.png";
import { useNav } from "../context/NavContext";
import { useMediaQuery } from "react-responsive";
import home from "../assets/home.svg";
import about from "../assets/about.svg";
import product from "../assets/product.svg";
import pricing from "../assets/pricing.svg";
import account from "../assets/account.svg";

export default function Navbar() {
  const isLessThan_md = useMediaQuery({ query: "(max-width: 768px)" });

  const { setActive, setRotation } = useNav();

  const handelOnClick = (to, rotate) => {
    setActive(to);
    setRotation(rotate);
  };

  return (
    <div className="w-full h-full flex justify-between items-center px-10 bg-transparent">
      <div
        onClick={() => handelOnClick("/", "0")}
        className="h-full cursor-pointer w-36 hidden md:flex justify-center space-x-2 items-center font-bold"
      >
        <img
          src={logo}
          alt="cashfly"
          className="w-8 h-8 saturate-0 invert rotate-12"
        />
        <p>cashfly</p>
      </div>

      <div className="w-96 max-md:w-full h-full flex justify-between font-bold items-center">
        <button
          className="after:content-[''] after:block after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          onClick={() => handelOnClick("/", "0")}
        >
          {isLessThan_md ? (
            <img src={home} alt="" className="w-64 h-8" />
          ) : (
            "Home"
          )}
        </button>
        <button
          className="after:content-[''] after:block after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          onClick={() => handelOnClick("about", "10")}
        >
          {isLessThan_md ? (
            <img src={about} alt="" className="w-64 h-8" />
          ) : (
            "About"
          )}
        </button>
        <button
          className="after:content-[''] after:block after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          onClick={() => handelOnClick("products", "30")}
        >
          {isLessThan_md ? (
            <img src={product} alt="product" className="w-64 h-8" />
          ) : (
            " Product"
          )}
        </button>
        <button
          className="after:content-[''] after:block after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          onClick={() => handelOnClick("pricing", "60")}
        >
          {isLessThan_md ? (
            <img src={pricing} alt="pricing" className="w-64 h-8" />
          ) : (
            " Pricing"
          )}
        </button>
        <button
          className="after:content-[''] after:block after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full max-md:block hidden"
          onClick={() => handelOnClick("signup", "0")}
        >
          {isLessThan_md ? (
            <img src={account} alt="sign up" className="w-64 h-8" />
          ) : (
            " Sign up"
          )}
        </button>

        <button
          onClick={() => handelOnClick("signup", "180")}
          className="border-2 hidden md:flex justify-center items-center w-32 h-12 rounded-full relative"
        >
          Sign up
        </button>
      </div>
    </div>
  );
}
