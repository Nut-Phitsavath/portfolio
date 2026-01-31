import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nattaphonh Phitsavath | Software Developer Portfolio",
  description: "Portfolio showcasing mobile and web development projects. Experienced in React, Flutter, React Native, SQL, and data analysis. Aspiring software developer seeking opportunities to grow.",
  keywords: ["Software Developer", "React", "Flutter", "React Native", "Mobile Developer", "Web Developer", "SQL", "Portfolio", "Nattaphonh Phitsavath"],
  authors: [{ name: "Nattaphonh Phitsavath" }],
  openGraph: {
    title: "Nattaphonh Phitsavath | Software Developer Portfolio",
    description: "Mobile and web development portfolio showcasing React, Flutter, and database projects",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
