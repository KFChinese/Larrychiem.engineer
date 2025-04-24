import 'styles/global.css';

import { ThemeProvider } from 'next-themes';

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'], // ✅ Add this line
  preload: true,      // Optional but good to be explicit
});




const interVariable = Inter();

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
 
      <ThemeProvider attribute="class">
        <main className={interVariable.className}>
          <Component {...pageProps} />
        
        </main>

      </ThemeProvider>
      
      

  );
}
