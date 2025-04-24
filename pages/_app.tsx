import 'styles/global.css';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'], // ✅ required
  preload: true,      // optional, true by default
});

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <ThemeProvider attribute="class">
      <main className={inter.className}> {/* ✅ use the right one */}
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
