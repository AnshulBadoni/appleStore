import React, { useState, useEffect, useRef } from "react";
import { LaptopCanvas } from "./canvas";

const Overview = () => {
  const [truncated, setTruncated] = useState(true);
  const contentRef = useRef(null);

  useEffect(() => {
    // Check if the content overflows the container
    const checkOverflow = () => {
      if (contentRef.current) {
        setTruncated(contentRef.current.scrollHeight > contentRef.current.clientHeight);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  return (
    <section id="overview" className="flex flex-col md:flex-row">
      <div className={`flex-1 h-[100vh] flex-basis-[50%] mx-5 md:flex-col flex`}>
        <LaptopCanvas />
      </div>
      <div className={`flex-1 h-[90vh] flex-basis-[50%] mx-5 blue-glassmorphism md:order-1 md:flex-col`}>
        <h1 className="font-poppins font-bold text-4xl text-white justify-center items-center flex mt-16 italic">
          MacBook Air 15"
        </h1>
        <p
          ref={contentRef}
          className={`font-poppins text-2xl text-white justify-center items-center flex m-16 mt-32 ${
            truncated ? "overflow-hidden sm:max-h-60 max-h-40" : ""
          }`}
        >
          Impressively big. Impossibly thin. The new 15‑inch MacBook Air makes
          room for more of what you love with a spacious Liquid Retina
          display. And with the 13-inch MacBook Air, you have more reasons than
          ever to choose Air. Supercharged by the M2 chip — and with up to 18
          hours of battery life — both laptops deliver blazing-fast
          performance in an ultra-portable design.
        </p>
        
        <div className="flex items-center justify-center h-24">
          <a
            className="rounded-full flex items-center justify-center text-white font-bold font-poppins px-7 py-4 w-48 bg-[#915EFF]"
            href=""
          >
            Buy
          </a>
          &nbsp;
          <a
            className="rounded-full flex items-center justify-center text-white font-bold font-poppins px-7 py-4 w-48 bg-[#915EFF]"
            href=""
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Overview;
