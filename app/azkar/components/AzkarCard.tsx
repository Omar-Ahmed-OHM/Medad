"use client"
import React, { useState } from "react";
import { AzkarCardProps } from "../types/azkar_type";
import { IoMoon, IoSunny } from "react-icons/io5";
const AzkarCard: React.FC<AzkarCardProps> = ({
  category,
  text,
  repeat,
  benefit,
}) => {
  const [count,setcount]=useState(0);
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[22px]
        border
        border-[#c7c0a4]
        bg-white
        shadow-lg
        h-full
      "
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/assets/Azkar.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative flex justify-end">
        <div
          className="
            bg-gradient-to-r
            from-[#006420]
            to-[#0b7a2f]
            text-white
            px-6
            py-2
            rounded-bl-[24px]
            text-lg
            font-bold
            flex 
            justify-center
            items-center
            gap-2
          "
        >
          <div className="text-amber-300">
            {(category==="morning")?(
              <IoSunny/>
            ):(
            <IoMoon/>
            )}
          </div>
          <div>
          {(category==="morning")?("أذكار الصباح"):("أذكار المساء")}
          </div>
        </div>
      </div>
      <div className="relative bg-white/80 backdrop-blur-md rounded-xl mx-4 mt-4 p-4">
        <div className="px-2 pt-2 text-gray-700 text-sm">
                    {(category==="morning")?("أذكار الصباح"):("أذكار المساء")}

        </div>
       <div className="px-2 py-3 h-48 flex items-center justify-center">
  <p
    className="
      text-center
      text-2xl
      font-semibold
      leading-[1.8]
      line-clamp-4
    "
  >
            {text}
          </p>
        </div>
      </div>
      <div className="relative px-4 mt-4">
        <div
          className="
            flex
            items-center
            justify-between
            bg-white/80
            rounded-xl
            p-2
          "
        >
          <div className="flex gap-2">
            <div className="w-16 h-9 rounded-lg bg-white/80 flex items-center justify-center">
              {count}/{repeat}
            </div>
            <button onClick={()=>{setcount((prev)=>prev < repeat ? prev + 1 : repeat)}} className="w-9 h-9 hover:cursor-pointer rounded-lg bg-[#0b742e] text-white">
              +
            </button>
          </div>
          <span className="text-sm font-medium">التكرار : {repeat}</span>
        </div>
      </div>
      <div className="relative bottom-0 p-4">
        <div className="bg-white/80 rounded-xl text-center p-3 text-base">
          فضل : {benefit}
        </div>
      </div>
    </div>
  );
};

export default AzkarCard;