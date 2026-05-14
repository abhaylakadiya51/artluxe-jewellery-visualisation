import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  title: "Artisan Jewelry Digital Atelier | 3D Visualization",
  description: "High-fashion minimalist 3D jewelry renderings and visualization.",
  openGraph: {
    title: "Artisan Jewelry Digital Atelier | 3D Visualization",
    description: "High-fashion minimalist 3D jewelry renderings and visualization.",
    url: "https://artluxejewelry.com",
    siteName: "Artisan Jewelry",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1200",
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
      <body className="min-h-screen bg-background text-foreground selection:bg-primary/30 flex flex-col font-sans font-light">
        <SmoothScroll>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
