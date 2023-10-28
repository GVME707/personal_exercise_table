import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header className="text-4xl font-bold mt-8 text-center">
        7 Days Workout Plan
      </header>
      <body className={inter.className}>{children}</body>
      <footer className="flex justify-center items-center h-24 border-t">
        <Link
          href="https://www.instagram.com/vanatsanan.php/"
          className="flex justify-center items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by @vanatsanan.php
        </Link>
      </footer>
    </html>
  );
}
