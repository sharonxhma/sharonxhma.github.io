import "./globals.css";
import type { Metadata } from "next";
import ScrollParallaxProvider from "./parallax-provider";
import { Bai_Jamjuree, Manrope } from "next/font/google";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700"],
  display: "swap",
  variable: "--font-bai-jamjuree",
  preload: true,
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700"],
  display: "swap",
  variable: "--font-manrope",
  preload: true,
});

export const metadata: Metadata = {
  title: "Sharon Ma",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${baiJamjuree.variable} ${manrope.variable}`}>
        <ScrollParallaxProvider>{children}</ScrollParallaxProvider>
      </body>
    </html>
  );
}
