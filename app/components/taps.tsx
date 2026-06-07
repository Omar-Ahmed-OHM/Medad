"use client"
import React from "react";
import { tapstypes } from '../types/types';
import Link from "next/link";
import { usePathname } from "next/navigation";

const Taps: React.FC<tapstypes> = ({ labels = [], routes = [] }) => {
  const pathname = usePathname();

  return (
    <div className="relative flex flex-col sm:flex-row justify-center sm:justify-around items-center w-full sm:w-auto sm:min-w-[420px] lg:w-2xl h-auto sm:h-16 gap-2 sm:gap-0 px-2 sm:px-4 py-2 sm:py-0 rounded-xl overflow-hidden bg-gradient-to-r from-[#004c0d] via-[#0b5d1e] to-[#004c0d] shadow-[0_10px_30px_rgba(0,0,0,0.2)] border border-[#d7c07f]/30">

      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#d7c07f_1px,transparent_1px)] bg-[size:18px_18px] pointer-events-none" />

      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d7c07f] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d7c07f] to-transparent" />

      {labels.map((label, index) => {
        const route = routes[index];
        const isActive = pathname === route || pathname.startsWith(route + "/");

        return (
          <Link
            key={index}
            href={route}
            className={`
              relative z-10 w-full sm:w-auto text-center px-3 sm:px-4 py-2 flex items-center justify-center rounded-md text-sm sm:text-base lg:text-lg font-medium transition-all duration-300
              ${
                isActive
                  ? "bg-[#d7c07f] text-[#004c0d] shadow-[0_0_15px_rgba(215,192,127,0.8)] scale-105"
                  : "text-white hover:bg-white/10 hover:text-[#d7c07f] before:content-[''] before:absolute before:inset-0 before:rounded-md before:border before:border-[#d7c07f]/30 before:opacity-60"
              }
            `}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
};

export default Taps;