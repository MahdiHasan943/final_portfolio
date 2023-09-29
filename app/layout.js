'use client'
import Footer from '@/components/front-end/Footer/Footer'
import Header from '@/components/front-end/Header/Header'
import '@/styles/globals.css'
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from 'react';
import { Triangle } from  'react-loader-spinner'
import { motion,easeOut ,easeIn } from 'framer-motion';

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false after 500ms delay
    }, 1500);
  }, []);
  return (
    <html lang="en">
      <head>
        <title>Mahdi Hasan portfolio</title>
        
      </head>

      <body className='scroll-smooth shadow-summery mx-auto h-auto max-w-[1700px]'>
        <ThemeProvider attribute="class">
          {
            loading ?
              <div className="relative flex justify-center items-center py-20 bg-[#252a60]  h-[100vh] w-full]">
                 <Triangle
            height="200"
            width="200"
                  color="#fff"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
                   <motion.div className="h-[100%] w-[100%] absolute top-0 left-0  bg-[#1c1d25]  "
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 1, ease: easeOut }} 
              >
               
             </motion.div>
           </div>
              : <>     <Header />

          <main>
          {children}
          </main>
        </>
          }
                 </ThemeProvider>


        
      </body>
    </html>
  )
}
