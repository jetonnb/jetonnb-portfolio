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
  metadataBase: new URL('https://jetonnb.com'),
  title: "Jeton Nikollbibaj | Software Developer Portfolio",
  description: "Jeton Nikollbibaj is a Software Developer from Kosovo specializing in Angular, TypeScript, React, HTML, SCSS, and JavaScript. View my portfolio showcasing web development projects, certifications, and professional experience at Axians Kosovo.",
  keywords: [
    "Jeton Nikollbibaj",
    "Software Developer",
    "Web Developer",
    "Angular Developer",
    "TypeScript Developer",
    "React Developer",
    "Kosovo Developer",
    "Axians Kosovo",
    "Frontend Developer",
    "Full Stack Developer",
    "Gjakova",
    "Prishtina",
    "Portfolio",
    "Nikollbibaj",
  ],
  authors: [{ name: "Jeton Nikollbibaj" }],
  creator: "Jeton Nikollbibaj",
  publisher: "Jeton Nikollbibaj",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jetonnb.com",
    siteName: "Jeton Nikollbibaj Portfolio",
    title: "Jeton Nikollbibaj | Software Developer Portfolio",
    description: "Jeton Nikollbibaj is a Software Developer from Kosovo specializing in Angular, TypeScript, React, and modern web technologies. View my projects and experience.",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Jeton Nikollbibaj",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeton Nikollbibaj | Software Developer Portfolio",
    description: "Software Developer specializing in Angular, TypeScript, React, and modern web technologies.",
    images: ["/favicon.png"],
  },
  verification: {
    google: "your-google-verification-code", // You'll need to add this later
  },
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
