"use client";

import React from "react";
import { 
  IoCreateOutline, 
  IoEyeOutline, 
  IoShieldCheckmarkOutline, 
  IoColorPaletteOutline, 
  IoHardwareChipOutline,
  IoHeartOutline
} from "react-icons/io5";

export default function AboutMedad() {
  return (
    <div className="min-h-screen bg-[#E2EDE4] py-8 sm:py-10 md:py-12 px-3 sm:px-4 select-none" dir="rtl">
      <div className="max-w-5xl mx-auto space-y-10 sm:space-y-14 md:space-y-16">

        <div className="text-center space-y-3 sm:space-y-4 relative">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white border-2 border-[#bca66a] rounded-full flex items-center justify-center mx-auto shadow-md">
            <IoCreateOutline className="text-3xl sm:text-4xl text-[#0b6b2e]" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-[#0b6b2e]">
            مِنَصَّة مِدَاد
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium px-2">
            نبع المعرفة الإسلامية الرقمية.. نسعى لتقريب السنة النبوية المطهرة والأذكار اليومية لكل مسلم بأسلوب عصري، موثق، وسهل الاستخدام.
          </p>

          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-transparent via-[#bca66a] to-transparent mx-auto mt-3 sm:mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          <div 
            className="rounded-[2rem] border-2 border-[#bca66a] bg-white p-5 sm:p-6 md:p-8 shadow-lg relative overflow-hidden"
            style={{
              backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.96)), url('https://i.ibb.co/60X9Z3m/islamic-pattern.jpg')",
              backgroundSize: "cover"
            }}
          >
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-[#0b6b2e]/5 rounded-bl-full flex items-start justify-end p-3 sm:p-4">
              <IoEyeOutline className="text-xl sm:text-2xl text-[#0b6b2e]/70" />
            </div>

            <h3 className="text-xl sm:text-2xl font-serif font-black text-[#0b6b2e] mb-3 sm:mb-4">رؤيتنا</h3>

            <p className="text-xs sm:text-sm md:text-base text-gray-650 leading-loose">
              أن نكون المرجع الرقمي الأول الموثوق للمسلم في الحديث الشريف وعلوم السُّنّة والأدعية المأثورة، عبر تقديم محتوى نقي وخالٍ من الشوائب مدعومًا بأحدث تقنيات العرض والتصفح.
            </p>
          </div>

          <div 
            className="rounded-[2rem] border-2 border-[#bca66a] bg-white p-5 sm:p-6 md:p-8 shadow-lg relative overflow-hidden"
            style={{
              backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.96)), url('https://i.ibb.co/60X9Z3m/islamic-pattern.jpg')",
              backgroundSize: "cover"
            }}
          >
            <h3 className="text-xl sm:text-2xl font-serif font-black text-[#0b6b2e] mb-3 sm:mb-4">رسالتنا</h3>

            <p className="text-xs sm:text-sm md:text-base text-gray-650 leading-loose">
              تسهيل الوصول للفوائد والجرعات الإيمانية اليومية، ونشر العلم النافع من خلال تبسيط شروح الأحاديث وتوفير عدادات ذكية تفاعلية للأذكار تعين المستخدم وتُحفزه على الذكر المستمر.
            </p>
          </div>

        </div>

        <div className="bg-[#0b6b2e] rounded-[2.5rem] border-2 border-[#bca66a] p-6 sm:p-8 md:p-10 shadow-xl text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('https://i.ibb.co/60X9Z3m/islamic-pattern.jpg')] bg-cover"></div>

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black font-mono text-[#bca66a]">+10,000</div>
              <div className="text-[10px] sm:text-xs md:text-sm font-medium text-[#E2EDE4]">حديث شريف بشرحه</div>
            </div>

            <div className="space-y-1 border-r border-white/10">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black font-mono text-[#bca66a]">+500</div>
              <div className="text-[10px] sm:text-xs md:text-sm font-medium text-[#E2EDE4]">ذكر ودعاء مأثور</div>
            </div>

            <div className="space-y-1 border-r border-white/10">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black font-mono text-[#bca66a]">100%</div>
              <div className="text-[10px] sm:text-xs md:text-sm font-medium text-[#E2EDE4]">تدقيق وتخريج معتمد</div>
            </div>

            <div className="space-y-1 border-r border-white/10">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black font-mono text-[#bca66a]">+50k</div>
              <div className="text-[10px] sm:text-xs md:text-sm font-medium text-[#E2EDE4]">مستفيد نشط يومياً</div>
            </div>
          </div>
        </div>

        <div className="space-y-5 sm:space-y-6">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-serif font-black text-[#0b6b2e]">ما الذي يميز مِداد؟</h3>
            <p className="text-[10px] sm:text-xs text-gray-500 mt-1">القيم والركائز التي نبني عليها منصتنا</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">

            <div className="bg-white/60 backdrop-blur-sm border border-[#bca66a]/30 rounded-2xl p-4 sm:p-5 space-y-2 hover:border-[#0b6b2e] transition-colors">
              <div className="text-xl sm:text-2xl text-[#0b6b2e]">
                <IoShieldCheckmarkOutline />
              </div>
              <h4 className="font-bold text-[#0b6b2e] text-sm sm:text-base">الدقة والتوثيق</h4>
              <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed">
                لا ننشر حديثاً إلا بعد مراجعة درجته وتخريجه من أمهات كتب السنة (كالبخاري ومسلم).
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm border border-[#bca66a]/30 rounded-2xl p-4 sm:p-5 space-y-2 hover:border-[#0b6b2e] transition-colors">
              <div className="text-xl sm:text-2xl text-[#0b6b2e]">
                <IoColorPaletteOutline />
              </div>
              <h4 className="font-bold text-[#0b6b2e] text-sm sm:text-base">بساطة وجمال الواجهة</h4>
              <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed">
                تصميم مريح للعين ومناسب للقراءة الطويلة، مستوحى من فخامة الزخارف الإسلامية العريقة.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm border border-[#bca66a]/30 rounded-2xl p-4 sm:p-5 space-y-2 hover:border-[#0b6b2e] transition-colors">
              <div className="text-xl sm:text-2xl text-[#0b6b2e]">
                <IoHardwareChipOutline />
              </div>
              <h4 className="font-bold text-[#0b6b2e] text-sm sm:text-base">سرعة وتفاعلية فائقة</h4>
              <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed">
                أنظمة بحث لحظية ذكية، وعدادات تفاعلية للأذكار تحفظ تقدمك وتسهل وردك اليومي.
              </p>
            </div>

          </div>
        </div>

        <div className="text-center pt-6 text-[#0b6b2e]/80 font-serif italic text-xs sm:text-sm flex items-center justify-center gap-1.5 px-2">
          <span>نسأل الله عز وجل أن يجعل هذا العمل خالصاً لوجهه الكريم، وأن ينفع بنا وبكم الإسلام والمسلمين</span>
          <IoHeartOutline className="text-[#bca66a]" />
        </div>

      </div>
    </div>
  );
}