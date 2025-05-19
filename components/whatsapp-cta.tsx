"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Wine } from "lucide-react"

export default function WhatsAppCta() {
  return (
    <section className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#B50101] rounded-full opacity-20"></div>
              <img
                alt="Wine bottle"
                className="mx-auto relative z-10"
                height="400"
                src="image\vertical-selective-closeup-shot-red-berries.jpg"
                width="300"
              />
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif">
                Need Assistance?
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our wine experts are ready to help you select the perfect bottle for any occasion. Connect with us
                directly via WhatsApp for personalized recommendations and special offers.
              </p>
            </div>
            <div>
              <Button
                className="bg-[#B50101] hover:bg-[#8F0101] text-white"
                onClick={() => window.open("https://wa.me/1234567890", "_blank")}
              >
                <Wine className="mr-2 h-4 w-4" /> Chat on WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
