import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"], // Ultra-thin to normal weights
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});


export const metadata: Metadata = {
  title: "Aura | Digital Art & Jewellery Gallery",
  description: "Curated collections, exhibition previews, and minting interface for 3D jewellery art.",
  openGraph: {
    title: "Aura | Digital Art & Jewellery Gallery",
    description: "Curated collections, exhibition previews, and minting interface for 3D jewellery art.",
    url: "https://artluxejewelry.com",
    siteName: "Aura Gallery",
    images: [
      {
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ebGaramond.variable} antialiased scroll-smooth dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-screen bg-[#050505] text-[#f5f5f5] selection:bg-white/20 flex flex-col font-sans font-light overflow-x-hidden">
        <CustomCursor />
        <SmoothScroll>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
