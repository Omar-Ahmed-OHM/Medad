import React from "react";
import Link from "next/link";
import { CardProps } from "../types/types";

const Card: React.FC<CardProps> = ({
  title,
  description,
  route,
  src,
}) => {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[28px]
        p-6 md:p-8
        border border-[#C5A85C]/20
        transition-all duration-500
        bg-gradient-to-r from-[#004c0d] via-[#0b5d1e] to-[#004c0d] shadow-[0_10px_30px_rgba(0,0,0,0.2)]
        text-white
      "
    >
      <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>

      <div className="relative flex flex-col md:flex-row-reverse items-center gap-6 md:gap-10 z-10">

        {/* IMAGE CONTAINER */}
        <div className="w-full md:w-[35%] flex justify-center">
          <div className="
            relative
            w-36 h-36 md:w-44 md:h-44
            rounded-2xl
            overflow-hidden
            shadow-md
            border border-[#C5A85C]/30
            bg-white/80
            backdrop-blur-sm
          ">
            <img
              src={src}
              alt={title}
              className="
                w-full h-full object-cover
                transition-transform duration-500
                hover:scale-105
              "
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-60"></div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex-1 text-right w-full">

          {/* Title */}
          <h3 className="
            text-[22px] md:text-[26px]
            font-serif
            font-bold
            text-white
            leading-snug
            mb-3
            tracking-tight
          ">
            {title}
          </h3>

          {/* Description */}
          <p className="
            text-white
            font-semibold
            text-[15px] md:text-[17px]
            leading-[1.9]
            mb-6
            max-w-[550px]
            font-medium
          ">
            {description}
          </p>

          {route && (
            <Link
              href={route}
              className="
                inline-flex
                items-center
                gap-2
                px-6 py-3
                rounded-full
                bg-gradient-to-l from-[#0f3d24] to-[#145c36]
                text-[#f1e0a8]
                hover:text-white
                text-sm md:text-base
                font-bold
                shadow-md
                border border-[#C5A85C]/30
                hover:shadow-lg
                hover:scale-[1.02]
                active:scale-95
                transition-all duration-300
              "
            >
              {title}
              <span className="text-lg">←</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;