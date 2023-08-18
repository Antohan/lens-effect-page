import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
import './globals.css';

const kamerik205 = localFont({
  src: '../public/fonts/kamerik205-heavy.woff2',
  variable: '--font-kamerik205',
});
const merriweather = localFont({
  src: '../public/fonts/merriweather-regular-italic.woff2',
  variable: '--font-merriweather',
});

export const metadata: Metadata = {
  title: '3D Page',
  description: 'Weather app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${kamerik205.variable} ${merriweather.variable} bg-black text-white`}
      >
        {children}
      </body>
      <Script src="/script.js" />
      <Script src="/rain.js" />
    </html>
  );
}
