import Navbar from "../components/Navbar";
import "./globals.css";

import React from "react";
import { Manrope } from 'next/font/google'





//👇 Configure our font object
const openSans = Manrope({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
      
        {children}</body>
    </html>
  );
}
