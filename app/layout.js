import Footer from "@/components/front-end/Footer/Footer";
import Header from "@/components/front-end/Header/Header";
import "@/styles/globals.css";
import TopBtn from "@/components/front-end/TobBtn";
import { Providers } from "@/utils/ThemeProviders";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Mahdi Hasan Portfolio</title>
      </head>

      <body className="scroll-smooth shadow-summery mx-auto h-auto w-full">
        
        <Providers> 
            <Header />
          <main>
            {children}
          </main>
            <Footer />
            <TopBtn />
            </Providers>

        
        </body>

      </html>

  );
}
