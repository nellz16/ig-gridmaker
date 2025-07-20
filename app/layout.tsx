import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Auto Grid Slicer - Instagram Grid Maker Tool | Gratis & Mudah",
  description:
    "Tool gratis untuk membuat grid Instagram yang sempurna. Potong gambar panorama menjadi grid 3x4, 3x5, atau custom. Tidak perlu daftar, langsung pakai!",
  keywords: [
    "instagram grid",
    "grid maker",
    "instagram slicer",
    "potong gambar instagram",
    "grid instagram gratis",
    "instagram grid tool",
    "split image instagram",
    "panorama to grid",
    "instagram marketing",
    "social media tools",
  ],
  authors: [{ name: "Auto Grid Slicer" }],
  creator: "Auto Grid Slicer",
  publisher: "Auto Grid Slicer",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://autogrid-slicer.vercel.app",
    siteName: "Auto Grid Slicer",
    title: "Auto Grid Slicer - Tool Instagram Grid Gratis",
    description:
      "Buat grid Instagram yang menakjubkan dengan mudah. Tool gratis untuk memotong gambar panorama menjadi grid yang sempurna.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Auto Grid Slicer - Instagram Grid Maker Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Grid Slicer - Tool Instagram Grid Gratis",
    description: "Buat grid Instagram yang menakjubkan dengan mudah. Tool gratis untuk memotong gambar panorama.",
    images: ["/og-image.png"],
    creator: "@autogridtool",
  },
  alternates: {
    canonical: "https://autogrid-slicer.vercel.app",
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Auto Grid Slicer",
  description: "Tool gratis untuk membuat grid Instagram yang sempurna dari gambar panorama",
  url: "https://autogrid-slicer.vercel.app",
  applicationCategory: "DesignApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  creator: {
    "@type": "Organization",
    name: "Auto Grid Slicer",
  },
  featureList: [
    "Potong gambar panorama menjadi grid Instagram",
    "Support berbagai ukuran grid (3x4, 3x5, custom)",
    "Preview real-time sebelum download",
    "Download dalam format ZIP",
    "Gratis tanpa watermark",
    "Tidak perlu registrasi",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
