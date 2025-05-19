"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white mt-8">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 font-serif">
                Discover Exquisite Wines
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Indulge in our carefully curated selection of fine wines.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-[#B50101] hover:bg-[#8F0101] text-white">Explore Collection</Button>
            </div>
          </motion.div>
          <motion.div
            className="mx-auto lg:ml-auto flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              alt="Wine bottles"
              className="aspect-[4/3] overflow-hidden rounded-xl object-cover object-center"
              height="400"
              src="image\top-view-bottles-alcohol-assortment.jpg"
              width="600"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
