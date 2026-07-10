import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Nattaphonh Phitsavath | Software Developer",
  description: "Portfolio of Nattaphonh Phitsavath, a junior software developer building mobile and web applications with React, Flutter, and SQL-backed systems.",
  keywords: ["Software Developer", "React", "Flutter", "React Native", "Mobile Developer", "Web Developer", "SQL", "Portfolio", "Nattaphonh Phitsavath"],
  authors: [{ name: "Nattaphonh Phitsavath" }],
  openGraph: {
    title: "Nattaphonh Phitsavath | Software Developer",
    description: "Portfolio of Nattaphonh Phitsavath, a junior software developer building mobile and web applications with React, Flutter, and SQL-backed systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t)t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
        <div className="ambient-glow" />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
