import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

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
  description:
    "A six-month intensive training program equipping pastors and church leaders with practical systems for sustainable, scalable, spirit-led ministry.",
  metadataBase: new URL("https://tea-school-of-ministry.vercel.app"),
  openGraph: {
    title: "The Edifying Assembly | School of Ministry",
    description:
      "A six-month intensive training program equipping pastors and church leaders with practical systems for sustainable, scalable, spirit-led ministry.",
    url: "https://tea-school-of-ministry.vercel.app",
    siteName: "TEA School of Ministry",
    images: [
      {
        url: "/images/og-preview.png",
        width: 1200,
        height: 630,
        alt: "The Edifying Assembly School of Ministry",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Edifying Assembly | School of Ministry",
    description:
      "A six-month intensive training program equipping pastors and church leaders with practical systems for sustainable, scalable, spirit-led ministry.",
    images: ["/images/og-preview.png"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
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

      </body>
    </html>
  );
}
