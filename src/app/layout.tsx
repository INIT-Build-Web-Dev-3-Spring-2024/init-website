import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "INIT @ FIU",
  description: "A website for INIT",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={poppins.className}>

          {/* <Navbar /> */}
     
        {children}
  
          {/* <Footer/> */}
      
      </body>
    </html>
  );
}
