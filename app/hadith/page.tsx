"use client";

import { useState } from "react";
import {useHadiths} from './hook/useHadiths'
import {useDebounce} from './hook/useDebounce'
import { Hadith} from './types/type'
import { BiSearch } from "react-icons/bi";

export default function All_Hadith() {
  const [pagination, setPagination] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedSearch = useDebounce(searchQuery, 400);
  const cleanSearch = debouncedSearch.trim();

  const { hadiths, isLoading, error } = useHadiths(
    pagination,
    12,
    cleanSearch
  );

  if (isLoading) {
    return (
      <div>
        <div className="text-center px-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0b6b2e]">
            الحديث الشريف
          </h1>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            تصفح وابحث في الأحاديث النبوية الشريفة
          </p>
          <div className="w-20 sm:w-24 h-1 bg-[#bca66a] mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-2xl mx-auto px-3 sm:px-0">
          <div className="relative bg-white/80 backdrop-blur-lg border border-white shadow-xl rounded-2xl sm:rounded-3xl overflow-hidden mt-4">

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setPagination(1);
              }}
              placeholder="ابحث عن حديث أو كلمة مفتاحية..."
              className="w-full bg-transparent py-4 sm:py-5 pr-12 sm:pr-14 pl-20 sm:pl-28 outline-none text-sm sm:text-base text-gray-800"
            />

            <span className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 text-lg sm:text-xl">
              <BiSearch />
            </span>

            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setPagination(1);
                }}
                className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 text-xs sm:text-sm text-red-500 font-bold"
              >
                مسح
              </button>
            )}
          </div>

          <div className="text-center mt-3 text-xs sm:text-sm text-gray-500">
            تم العثور على {hadiths.length} حديث
          </div>
        </div>

        <div className="flex justify-center items-center min-h-screen bg-[#E2EDE4] px-3">
          <div className="space-y-4 w-full max-w-5xl">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-52 sm:h-64 rounded-2xl sm:rounded-3xl bg-white animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#E2EDE4] pt-20 px-3">
        <div className="p-4 sm:p-6 text-center text-red-600 font-bold bg-white rounded-2xl max-w-md mx-auto shadow-lg text-sm sm:text-base">
          حدث خطأ أثناء جلب البيانات
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[#E2EDE4] to-[#f8faf8] py-6 sm:py-10 px-3 sm:px-4"
      dir="rtl"
    >
      <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">

        <div className="text-center px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0b6b2e]">
            الحديث الشريف
          </h1>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            تصفح وابحث في الأحاديث النبوية الشريفة
          </p>
          <div className="w-20 sm:w-24 h-1 bg-[#bca66a] mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-2xl mx-auto px-2 sm:px-0">
          <div className="relative bg-white/80 backdrop-blur-lg border border-white shadow-xl rounded-2xl sm:rounded-3xl overflow-hidden">

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setPagination(1);
              }}
              placeholder="ابحث عن حديث أو كلمة مفتاحية..."
              className="w-full bg-transparent py-4 sm:py-5 pr-12 sm:pr-14 pl-20 sm:pl-28 outline-none text-sm sm:text-base text-gray-800"
            />

            <span className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 text-lg sm:text-xl">
              <BiSearch />
            </span>

            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setPagination(1);
                }}
                className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 text-xs sm:text-sm text-red-500 font-bold"
              >
                مسح
              </button>
            )}
          </div>

          <div className="text-center mt-3 text-xs sm:text-sm text-gray-500">
            تم العثور على {hadiths.length} حديث
          </div>
        </div>

        <div className="space-y-5 sm:space-y-8">
          {hadiths.length > 0 ? (
            hadiths.map((hadith: Hadith) => (
              <div
                key={hadith._id}
                className="rounded-2xl sm:rounded-[2rem] border border-[#bca66a]/30 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden mx-1 sm:mx-0 p-6"
                style={{
                  backgroundImage: "url('/assets/Azkar.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="p-4 sm:p-6 md:p-8">

                  <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-2 sm:gap-3 border-b pb-3 sm:pb-4">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#0b6b2e]">
                      {hadith.title}
                    </h2>

                    {hadith.grade && (
                      <span className="bg-[#0b6b2e] text-white px-3 py-1 rounded-lg text-xs font-bold">
                        {hadith.grade}
                      </span>
                    )}
                  </div>

                  <div className="my-4 sm:my-6 bg-stone-50 text-black rounded-xl sm:rounded-2xl p-4 sm:p-6">
                    <p className="text-base sm:text-xl leading-loose text-center font-bold">
                      {hadith.text}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                    {hadith.explanation && (
                      <div className="bg-stone-50 p-4 sm:p-5 rounded-xl sm:rounded-2xl">
                        <h3 className="font-bold text-[#0b6b2e] mb-3 text-sm sm:text-base">
                          📖 شرح الحديث
                        </h3>
                        <p className="text-xs sm:text-sm text-black leading-7">
                          {hadith.explanation}
                        </p>
                      </div>
                    )}

                    {hadith.benefits && (
                      <div className="bg-stone-50 p-4 sm:p-5 rounded-xl sm:rounded-2xl">
                        <h3 className="font-bold text-[#0b6b2e] mb-3 text-sm sm:text-base">
                          💡 فوائد الحديث
                        </h3>
                        <p className="text-xs sm:text-sm leading-7 text-black whitespace-pre-line">
                          {hadith.benefits}
                        </p>
                      </div>
                    )}
                  </div>
                  {hadith.link&&(
                    <p className="text-white bg-green-800 p-2 w-fit rounded-4xl">
                      {hadith.link}
                    </p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-center shadow-lg mx-2 sm:mx-0">
              <div className="text-4xl sm:text-6xl mb-4">🔍</div>
              <h3 className="text-lg sm:text-xl font-bold text-black">
                لا توجد نتائج مطابقة
              </h3>
              <p className="text-black mt-2 text-sm sm:text-base">
                جرب كلمات بحث أخرى
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-6">

          <button
            onClick={() => {
              setPagination((prev) => Math.max(prev - 1, 1));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            disabled={pagination === 1}
            className="px-4 sm:px-6 py-2 sm:py-3 bg-[#0b6b2e] text-white rounded-xl disabled:opacity-40 text-sm sm:text-base"
          >
            السابق
          </button>

          <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-xl shadow font-bold text-[#0b6b2e] text-sm sm:text-base">
            {pagination}
          </div>

          <button
            onClick={() => {
              setPagination((prev) => prev + 1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            disabled={!hadiths || hadiths.length < 12}
            className="px-4 sm:px-6 py-2 sm:py-3 bg-[#0b6b2e] text-white rounded-xl disabled:opacity-40 text-sm sm:text-base"
          >
            التالي
          </button>

        </div>

      </div>
    </div>
  );
}