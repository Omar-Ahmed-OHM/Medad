"use client";
import Image from "next/image";
import MedadLogo from "../../public/assets/medadlogo.webp";
import masged from "../../public/assets/gemiy.webp";
export default function Landing() {
  return (
    <div className="relative w-full">
      <div className="flex items-center justify-center p-3 sm:p-5">
        <div
          className="w-full max-w-5xl rounded-2xl sm:rounded-3xl shadow-2xl bg-cover bg-center z-50 mx-2"
          style={{ backgroundImage: "url('/assets/vector.webp')" }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 p-4 sm:p-6">

            <div className="w-full sm:w-auto flex justify-center">
              <Image
                src={MedadLogo}
                alt="Medad Logo"
                width={400}
                height={160}
                className="w-40 sm:w-64 md:w-80 h-auto"
              />
            </div>

            <div className="w-full sm:w-auto flex justify-center">
              <Image
                src={masged}
                alt="Masged Image"
                width={400}
                height={160}
                className="rounded-xl sm:rounded-2xl w-40 sm:w-64 md:w-80 h-auto"
              />
            </div>

          </div>
        </div>
      </div>

      <div
        className="w-full h-2 sm:h-16 bg-repeat-x bg-contain"
        style={{
          backgroundImage: "url('/assets/generate.png')",
        }}
      />
    </div>
  );
}