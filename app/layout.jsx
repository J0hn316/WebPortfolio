import { JetBrains_Mono } from 'next/font/google';
import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import StairTransition from '@/components/StairTransition';
import Footer from '@/components/Footer';
import './globals.css';

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMomo',
});

export const metadata = {
  title: 'John C. Wrimene',
  description:
    "SWE Portfolio that showcases John's work experience, current and on going projects and information about him.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" type="image/svg+xml" href="/jcw-logo.svg" />
      <body className={jetBrainsMono.className}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
