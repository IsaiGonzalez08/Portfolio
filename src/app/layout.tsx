import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gerardo González",
  description: "Gerardo's González Portfolio",
  openGraph: {
    title: "Gerardo González",
    description: "Gerardo's González Portfolio",
  },
  icons: {
    icon: "/icons/logo.svg",
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
        className={`${montserrat.variable} antialiased min-h-dvh`}
      >
        {children}
      </body>
    </html>
  );
}
