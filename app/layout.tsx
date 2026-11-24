import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Nexora - Next",
  description: "Proyecto Next.js, con DrizzleORM",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full`}
    >
      <body className={`${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
