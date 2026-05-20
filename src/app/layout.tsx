import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from 'next/font/google';
import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';
import { Figtree } from 'next/font/google';

/*
But it in the end of footer to credit the author: 
<div>
  Icons made from <a href="https://www.onlinewebfonts.com/icon">svg icons</a>is licensed by CC BY 4.0
</div>
*/

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '500', '700'],
});

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-figtree',
});

const sfPro = localFont({
  src: [
    {
      path: '../../public/fonts/sfpro/SF-Pro-Display-Regular.woff2',
      weight: '400',
    },
    {
      path: '../../public/fonts/sfpro/SF-Pro-Display-Bold.woff2',
      weight: '700',
    },
  ],
  variable: '--font-sfpro',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/satoshi/satoshi-regular.woff2',
      weight: '400',
    },
    {
      path: '../../public/fonts/satoshi/satoshi-medium.woff2',
      weight: '500',
    },
    {
      path: '../../public/fonts/satoshi/satoshi-bold.woff2',
      weight: '700',
    },
  ],
  variable: '--font-satoshi',
})

export const metadata: Metadata = {
  title: "LAVVI | Our Store",
  description: "Lavvi® Micro-Infusion Hair Growth Treatment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${figtree.variable} ${sfPro.variable} ${poppins.variable} ${satoshi.variable} h-full antialiased`}
    >
      <body className="min-h-full w-full min-w-[360px] flex flex-col">{children}</body>
    </html>
  );
}
