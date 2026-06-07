import type { Metadata } from "next";
import { Cairo, Amiri } from "next/font/google";
import "./globals.css";
import Provider from "./prvidor";
import Landing from "./landing/page";
import Taps from "./components/taps";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
});

const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-amiri",
});

export const metadata: Metadata = {
  title: "مداد",
  description: "الأحاديث والأذكار الإسلامية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      className={`${cairo.variable} ${amiri.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{
          backgroundImage: "url('/assets/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Provider>
          <Landing />

          <div className="flex justify-center pt-4">
            <Taps
              labels={['الاذكار','الأحاديث','عن مداد','الرئيسيه']}
              routes={["/azkar", "/hadith", "/about", "/"]}
            />
          </div>

          {children}
        </Provider>
      </body>
    </html>
  );
}