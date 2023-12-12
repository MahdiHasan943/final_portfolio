'use client'

// Import the necessary modules
import { ThemeProvider } from 'next-themes';

// Create a function component named Providers
export function Providers({ children }) {
  // Use ThemeProvider and pass the theme prop
  return (
    <ThemeProvider  attribute="class" >
      {children}
    </ThemeProvider>
  );
}
