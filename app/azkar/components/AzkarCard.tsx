"use client";

import React, { useState } from "react";
import { AzkarCardProps } from "../types/azkar_type";
import { IoMoon, IoSunny } from "react-icons/io5";

const AzkarCard: React.FC<AzkarCardProps> = ({
  category,
  text,
  repeat,
  benefit,
}) => {
  const [count, setcount] = useState(0);

  return (
    <div className="relative overflow-hidden rounded-[22px] border border-[#c7c0a4] bg-white shadow-lg w-full max-w-full min-w-0 flex flex-col" >
      
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/assets/Azkar.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative flex justify-end">
        <div className="bg-gradient-to-r from-[#006420] to-[#0b7a2f] text-white px-4 sm:px-6 py-2 rounded-bl-[24px] text-sm sm:text-lg font-bold flex items-center gap-2">
          <div className="text-amber-300">
            {category === "morning" ? <IoSunny /> : <IoMoon />}
          </div>
          <div>
            {category === "morning" ? "أذكار الصباح" : "أذكار المساء"}
          </div>
        </div>
      </div>

      <div className="relative bg-white/70 backdrop-blur-md rounded-xl mx-2 sm:mx-4 mt-3 sm:mt-4 p-3 sm:p-4 flex-1">
        <div className="px-1 sm:px-2 pt-1 sm:pt-2 text-gray-700 text-xs sm:text-sm">
          {category.toLowerCase()}
        </div>

        <div className="px-1 sm:px-2 py-2 sm:py-3 flex items-center justify-center">
          <p className="text-center text-lg sm:text-2xl font-semibold leading-[1.8] break-words text-black">
            {text}
          </p>
        </div>
      </div>

      <div className="relative px-2 sm:px-4 mt-3 sm:mt-4">
        <div className="flex items-center justify-between bg-[#ffffff] rounded-xl p-2 gap-2">
          
          <div className="flex gap-2 items-center">
            <div className="w-14 sm:w-16 h-8 sm:h-9 rounded-lg bg-white/80 flex text-black items-center justify-center text-sm">
              {count}/{repeat}
            </div>

            <button
              onClick={() =>
                setcount((prev) => (prev < repeat ? prev + 1 : repeat))
              }
              className="w-8 sm:w-9 h-8 sm:h-9 rounded-lg bg-[#0b742e] text-white hover:cursor-pointer"
            >
              +
            </button>
          </div>

          <span className="text-xs sm:text-sm font-medium text-black">
            التكرار : {repeat}
          </span>
        </div>
      </div>

      <div className="relative p-2 sm:p-4">
        <div className="bg-[#ffffff] text-black rounded-xl text-center p-2 sm:p-3 text-sm sm:text-base">
          فضل : {benefit}
        </div>
      </div>
    </div>
  );
};

export default AzkarCard;