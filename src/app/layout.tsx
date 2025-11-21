import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Jeton Nikollbibaj | Software Developer",
  description: "Portfolio of Jeton Nikollbibaj, a Software Developer skilled in React, Angular, and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} font-sans antialiased bg-black text-white min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/10">
          <p>© {new Date().getFullYear()} Jeton Nikollbibaj. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
