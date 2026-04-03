import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL("https://www.vyasastudies.in"),
  title: {
    default: "Vyasa Institute | Building India\u2019s Future Chartered Accountants",
    template: "%s | Vyasa Institute",
  },
  description:
    "India\u2019s premier preparatory institute for CA & CMA. Proven All India Ranks, expert faculty, and a disciplined pathway designed for professional success.",
  keywords: [
    "CA coaching",
    "CMA coaching",
    "CA Foundation",
    "CA Inter",
    "CA Final",
    "Vyasa Institute",
    "Vijayawada",
    "Guntur",
    "best CA institute India",
    "chartered accountant coaching",
    "professional course institute",
  ],
  authors: [{ name: "Vyasa Institute", url: "https://www.vyasastudies.in" }],
  creator: "Vyasa Institute",
  openGraph: {
    title: "Vyasa Institute | Building India\u2019s Future Chartered Accountants",
    description:
      "A Proven Path to CA Rank. India\u2019s premier preparatory institute for CA & CMA in Vijayawada & Guntur. Expert faculty, proven results.",
    type: "website",
    siteName: "Vyasa Institute",
    locale: "en_IN",
    url: "https://www.vyasastudies.in",
    images: [
      {
        url: "https://www.vyasastudies.in/logo.png",
        width: 280,
        height: 64,
        alt: "Vyasa Institute - Institute for Professional Courses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vyasa Institute | CA & CMA Preparatory Institute",
    description: "India\u2019s premier preparatory institute for CA & CMA. Proven rank, expert faculty. Vijayawada & Guntur.",
    images: ["https://www.vyasastudies.in/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.vyasastudies.in",
  },
  category: "education",
};

export default function RootLayout({ children }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Vyasa Institute",
    alternateName: "Vyasas Institute for Professional Courses",
    url: "https://www.vyasastudies.in",
    description: "Premier preparatory institute for CA & CMA in Vijayawada and Guntur",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vijayawada",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN",
    },
    telephone: "+919876543210",
    email: "info@vyasastudies.in",
    areaServed: ["Vijayawada", "Guntur"],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Vyasa Institute | CA & CMA Preparatory Institute - Vijayawada & Guntur",
    description: "India's premier preparatory institute for CA & CMA. Proven All India Rank, expert faculty, disciplined pathway to professional success.",
    url: "https://www.vyasastudies.in",
    isPartOf: {
      "@type": "WebSite",
      name: "Vyasa Institute",
      url: "https://www.vyasastudies.in",
    },
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
