import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "GiggleGear",
  description: "GiggleGear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
          <Navbar />
          <div className="mx-auto pt-[85px] p-4 sm:px-0 sm:max-w-xl md:max-w-3xl lg:max-w-7xl lg:px-6 lg:pt-24">
            {children}
            <Footer />
          </div>
        <ToastContainer position="bottom-right" />
      </body>
    </html>
  );
}
