import type { Metadata } from "next";
import Head from 'next/head'; // Importa Head de next/head
import { Inter, Rubik } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juan I",
  description: "Portfolio of Juan I",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Aquí agregas el favicon */}
        <link rel="icon" href="../public/images/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

