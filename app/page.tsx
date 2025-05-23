"use client"
import type { Wine } from "@/types"
import Hero from "@/components/hero"
import Overview from "@/components/overview"
import Products from "@/components/products"
import WhatsAppCta from "@/components/whatsapp-cta"
import Quote from "@/components/quote"
import Footer from "@/components/footer"

export default function Home() {
  const wines: Wine[] = [
    {
      id: 1,
      name: "MCC Brut Blanc DE Noir",
      type: "Sparkling",
      price: 178.0,
      image: "/image/wines/mcc_brut_blanc_de_noi.png",
      description: "A crisp and elegant sparkling wine with notes of citrus and brioche.",
    },
    {
      id: 2,
      name: "Syrah",
      type: "Red",
      price: 157.0,
      image: "/image/wines/syrah.png",
      description: "A bold and spicy red wine with flavors of blackberry and pepper.",
    },
    {
      id: 3,
      name: "Sauvignon Blanc",
      type: "White",
      price: 110.0,
      image: "/image/wines/sauvignon_blanc.png",
      description: "A refreshing white wine with vibrant notes of grapefruit and green apple.",
    },
    {
      id: 4,
      name: "Pinot Noir",
      type: "Red-Dry",
      price: 244.0,
      image: "/image/wines/pinot_noir.png",
      description: "A delicate red wine with aromas of cherry and earthy undertones.",
    },
    {
      id: 5,
      name: "Merlot",
      type: "Red",
      price: 110.0,
      image: "/image/wines/merlot.png",
      description: "A smooth red wine with flavors of plum and chocolate.",
    },
    {
      id: 6,
      name: "Cabernet Sauvignon",
      type: "Red",
      price: 110.0,
      image: "/image/wines/cabernet_sauvignon.png",
      description: "A full-bodied red wine with rich flavors of blackcurrant and oak.",
    },
    {
      id: 7,
      name: "Chardonnay",
      type: "White",
      price: 110.0,
      image: "/image/wines/chardonnay.png",
      description: "A buttery white wine with notes of vanilla and tropical fruits.",
    },
    {
      id: 14,
      name: "Sweet Red",
      type: "Sweet",
      price: 110.0,
      image: "/image/wines/sweet_red.png",
      description: "A luscious sweet red wine with flavors of ripe berries and a smooth finish.",
    },
    {
      id: 15,
      name: "Custom",
      type: "Custom",
      price: 350.0,
      image: "/image/wines/custom.png",
      description: "A unique blend crafted to your specific taste preferences.",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Overview />
      <Products wines={wines} />
      <WhatsAppCta />
      <Quote />
      <Footer />
    </main>
  )
}
