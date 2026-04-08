import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";

import { Header } from "@/components/header";
import { AosProvider } from "@/components/animation";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfólio | Clewerton Rodrigues",
  description:
    "Portfólio que mostra meus projetos e aprendizados ao longa da minha jornada",
  keywords: [
    "Desenvolvedor Front-end",
    "Front-end Developer React Next.js",
    "Desenvolvedor Front-end com TypeScript",
    "Desenvolvedor React Brasil",
  ],
  openGraph: {
    title: "Portfolio - Clewerton Rodrigues",
    images: ["/preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${poppins.className} antialiased`}>
        <AosProvider>
          <Header />
          {children}
        </AosProvider>
      </body>
    </html>
  );
}
