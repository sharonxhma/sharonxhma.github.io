import "./globals.css";
import type { Metadata } from "next";
import { Bai_Jamjuree, Manrope } from "next/font/google";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700"],
  display: "swap",
  variable: "--font-bai-jamjuree",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${baiJamjuree.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
