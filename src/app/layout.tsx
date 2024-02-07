import type { Metadata } from "next";
import { Kalam, Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  weight: ["400", "700", "300"],
  subsets: ["latin"],
  variable: "--font-heebo",
});
const kalam = Kalam({
  weight: ["400", "700", "300"],
  subsets: ["latin"],
  variable: "--font-kalam",
});
export const metadata: Metadata = {
  title: "My Portfolio Website",
  description: "Caio Theodoro's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heebo.variable} ${kalam.variable}`}>{children}</body>
    </html>
  );
}
