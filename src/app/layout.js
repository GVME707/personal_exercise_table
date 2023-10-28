import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My personal exercise plan",
  description: "A simple exercise plan for a week",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>{children}</body>
      
    </html>
  );
}
