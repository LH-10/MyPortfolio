import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lalit Hinduja Portfolio",
  description: "Hey I'm Lalit Hinduja  a full-stack web developer , I'm currently expanding into desktop app devlopment . Explore projects, resume in my portfolio.",
  keywords:"lalit hinduja,Lalit,Hinduja,portfolio,LH-10,web developer, frontend developer, fullstack,lalit portfolio ,Golang dev, GO",
  authors:{name:"Lalit Hinduja"}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="U_wDVMKDR2TUAlR1csZLXj9COx-vHA8UtG7nr_m55KY" />
        <meta name="msvalidate.01" content="DCA6585C76E074EE39921041663092EB" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Header />
        {children}
      </body>
    </html>
  );
}
