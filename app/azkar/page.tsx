"use client";

import { AzkarCardProps } from "./types/azkar_type";
import medad_logo from "../../public/assets/medadlogo.webp";
import { useState } from "react";
import Image from "next/image";
import AzkarCard from "./components/AzkarCard";
import { useZekr } from "./hooks/useZekr";


export default function Azkar() {
  const [category_type, setCategoryType] = useState<string>("morning");
  const [open, setOpen] = useState(false);
  const { data: azkar, isLoading, error } = useZekr(category_type);

  if (isLoading)
    return <div className="p-4 text-center">جاري التحميل...</div>;

  if (error) console.log(error);

  return (
    <div className="relative min-h-screen">
      <div className="fixed left-2 sm:left-4 top-2 sm:top-4 z-50 flex flex-col items-start">

        <div
          className={`
            mb-2 flex flex-col gap-2 transition-all duration-300 origin-top-left
            ${
              open
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            }
          `}
        >
          <button
            onClick={() => {
              setCategoryType("morning");
              setOpen(false);
            }}
            className="px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base bg-gradient-to-r from-[#004c0d] via-[#0b5d1e] to-[#004c0d] text-white shadow-lg border border-green-700 hover:scale-105 transition"
          >
            أذكار الصباح
          </button>

          <button
            onClick={() => {
              setCategoryType("evening");
              setOpen(false);
            }}
            className="px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base bg-gradient-to-r from-[#004c0d] via-[#0b5d1e] to-[#004c0d] text-white shadow-lg border border-green-700 hover:scale-105 transition"
          >
            أذكار المساء
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="border text-green-900 font-semibold border-green-900 shadow-[0_10px_30px_rgba(0,0,0,0.2)] w-14 h-14 p-6 sm:w-12 sm:h-12 rounded-full flex items-center justify-center overflow-hidden bg-white/35"
        >
          اختار أذكارك 
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 p-3 sm:p-4">
        {azkar?.map((zekr: AzkarCardProps) => (
          <AzkarCard
            key={zekr._id}
            category={zekr.category}
            text={zekr.text}
            repeat={zekr.repeat}
            benefit={zekr.benefit}
          />
        ))}
      </div>
    </div>
  );
}