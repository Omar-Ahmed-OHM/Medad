"use client"
import Card from "./components/card";

export default function Home() {
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-3 sm:p-4 lg:p-6">
        <Card 
          title="الأَحَادِيث النَّبَوِيَّة" 
          description="اكْتَشِفْ مَجْمُوعَةً وَاسِعَةً مِنَ الأَحَادِيثِ النَّبَوِيَّةِ الشَّرِيفَةِ، مَعَ شَرْحٍ وَتَفْسِيرٍ لِكُلِّ حَدِيثٍ لِتَسْهِيلِ فَهْمِكَ وَاسْتِيعَابِكَ." 
          route="/Hadith" 
          src="/assets/hadith.png" 
          buttonText="عرض الاحاديث" 
        />
        <Card 
          title="عَنْ مِدَاد" 
          description="تَعَرَّفْ عَلَى رُؤْيَتِنَا وَأَهْدَافِنَا فِي نَشْرِ العِلْمِ النَّافِعِ، وَكَيْفَ نَسْعَى لِتَقْدِيمِ المُحْتَوَى الإِسْلَامِيِّ بِأَفْضَلِ صُورَةٍ مُمكنَةٍ." 
          route="/about" 
          src="/assets/medadlogo.webp" 
          buttonText="تعرف علينا"
        />
        <Card 
          title="الأَذْكَار وَالأَدْعِيَة" 
          description="حَصِّنْ نَفْسَكَ بِأَذْكَارِ الصَّبَاحِ وَالمَسَاءِ وَالأَدْعِيَةِ المَأْثُورَةِ، لِتَبْقَى عَلَى اتِّصَالٍ دَائِمٍ بِذِكْرِ اللهِ طِوَالَ يَوْمِكَ." 
          route="/azkar" 
          src="/assets/sepah.png"  
          buttonText="عرض الأذكار"
        />
      </div>
  );
}