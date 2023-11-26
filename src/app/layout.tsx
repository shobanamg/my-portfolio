import Script from "next/script";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "@/components/layout/header";
import { Providers } from "@/lib/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shobana Mathiarul | Full Stack Developer From Copenhagen, Denmark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BWPBE3C0MV"
        ></Script>
        <Script id="google-anayltics-script">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-BWPBE3C0MV');
          `}
        </Script>
      </head>
      <body
        className={`${inter.className} bg-gray-0 text-gray-600 antialiased`}
      >
        <Providers>
          <Header />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
