"use client";
import Footer from "@/components/front-end/Footer/Footer";
import Header from "@/components/front-end/Header/Header";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import TopBtn from "@/components/front-end/TobBtn";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Mahdi Hasan Portfolio</title>
        
      </head>

      <body className="scroll-smooth shadow-summery mx-auto h-auto max-w-[1700px]">
        <ThemeProvider attribute="class">
            <>
              <Header />
              <main>{children}</main>
              <Footer />
              <TopBtn />
            </>
        </ThemeProvider>
      </body>
    </html>
  );
}
