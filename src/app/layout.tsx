import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FillerComponent from "@/components/FillerComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "INIT @ FIU",
  description: "Generated by create next app",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          {/* <Navbar /> */}
        </header>
        {children}
        <main>
        {/* <FillerComponent/> */}
        </main>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
