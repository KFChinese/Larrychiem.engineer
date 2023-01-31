import 'styles/global.css';

import { ThemeProvider } from 'next-themes';

import { Inter } from '@next/font/google';

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";


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
