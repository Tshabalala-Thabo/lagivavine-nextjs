import type React from "react"
import type { Metadata } from "next"
import { Inter, DM_Serif_Display } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Lagive Vine | Premium Wine Collection",
  description: "Discover our exquisite selection of premium wines curated for the discerning palate.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSerif.variable} font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
