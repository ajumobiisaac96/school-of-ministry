import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "The Edifying Assembly | School of Ministry",
  description: "Equipping leaders for global impact. The Edifying Assembly School of Ministry provides structural integrity and spiritual depth for 21st-century spiritual governance.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#110014] text-[#F5EFEB] relative font-sans antialiased overflow-x-hidden">
        {/* Ambient background layers */}
        <div className="grain-overlay" />
        <div className="mesh-gradient-bg" />
        
        {/* Header component */}
        <Header />
        
        {/* Content wrapper */}
        <main className="relative z-10 flex min-h-screen flex-col pt-0">
          {children}
        </main>

        {/* Bottom Nav component */}
        <BottomNav />
      </body>
    </html>
  );
}
