'use client'
import Footer from '@/components/front-end/Footer/Footer'
import Header from '@/components/front-end/Header/Header'
import '@/styles/globals.css'
import { ThemeProvider } from "next-themes";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Mahdi Hasan portfolio</title>
        
      </head>

      <body className='scroll-smooth mx-auto shadow-lg max-w-[1700px]'>
      <ThemeProvider attribute="class">
        <Header/>
        <main>
        {children}
        </main>
        <Footer/>
        </ThemeProvider>

        
      </body>
    </html>
  )
}
