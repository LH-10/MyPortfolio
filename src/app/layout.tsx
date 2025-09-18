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
  keywords:"lalit hinduja,Lalit,Hinduja,portfolio,LH-10,web developer, frontend developer, fullstack,lalit portfolio ",
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
