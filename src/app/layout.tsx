import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Shobana Mathiarul | Full Stack Developer From Copenhagen, Denmark',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
      </html>
  );
}