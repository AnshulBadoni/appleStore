import React from "react";
import { IpadCanvas, MacbookCanvas, WatchCanvas } from "./canvas";
import { herobg } from "../assets";

const Details = () => {
  return (
    <section id="product">
      <img
        className=" w-full h-[80vh] absolute mt-[16vh] select-none"
        src={herobg}
        alt=""
      />

     

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-12 gap-8 mx-5 mt-[-120px]">
        <div className=" h-screen flex flex-col items-center">
          <IpadCanvas />
          <h1 className="text-white text-3xl italic mt-4 text-bold items-center text-black rounded cursor-pointer">
            iPad
          </h1>
          <button className="bg-white py-4 px-20 mt-6 text-bold items-center text-black rounded cursor-pointer">
            Learn More...
          </button>
        </div>
        <div className="h-screen flex flex-col items-center">
          <WatchCanvas />
          <h1 className="text-white text-3xl italic mt-4 text-bold items-center text-black rounded cursor-pointer">
            iWatch
          </h1>
          <button className="bg-white py-4 px-20 mt-6 text-bold items-center text-black rounded cursor-pointer">
            Learn More...
          </button>
        </div>
        <div className="h-screen flex flex-col items-center">
          <MacbookCanvas />
          <h1 className="text-white text-3xl italic mt-4 text-bold items-center text-black rounded cursor-pointer">
            MacBook 16"
          </h1>
          <button className="bg-white py-4 px-20 mt-6 text-bold items-center text-black rounded cursor-pointer">
            Learn More...
          </button>
        </div>
      </div>
    </section>
  );
};

export default Details;
