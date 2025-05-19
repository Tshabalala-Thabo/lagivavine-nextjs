"use client"

import { motion } from "framer-motion"

export default function Quote() {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="flex flex-col justify-center space-y-4 order-2 lg:order-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-center lg:text-left text-gray-800">
              "Wine is bottled poetry."
            </blockquote>
            <p className="text-right lg:text-left text-gray-500">– Robert Louis Stevenson</p>
          </motion.div>
          <motion.div
            className="flex justify-center order-1 lg:order-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              alt="Wine lifestyle"
              className="aspect-[4/3] overflow-hidden rounded-xl object-cover object-center"
              height="400"
              src="image\roses-wine-bottle-ice-bucket-table.jpg"
              width="600"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
