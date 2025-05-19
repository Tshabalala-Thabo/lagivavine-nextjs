"use client"

import { motion } from "framer-motion"
import { GrapeIcon as GrapeVine, Award, Truck, ShieldCheck } from "lucide-react"

export default function Overview() {
  const highlights = [
    {
      icon: <GrapeVine className="h-10 w-10 text-[#B50101]" />,
      title: "Premium Selection",
      description: "Carefully curated wines from the finest vineyards around the world.",
    },
    {
      icon: <Award className="h-10 w-10 text-[#B50101]" />,
      title: "Award Winning",
      description: "Our collection includes internationally recognized and award-winning wines.",
    },
    {
      icon: <Truck className="h-10 w-10 text-[#B50101]" />,
      title: "Fast Delivery",
      description: "Secure packaging and prompt delivery to preserve the quality of your wine.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-[#B50101]" />,
      title: "Quality Guarantee",
      description: "We stand behind the quality of every bottle in our collection.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif">
            Why Choose Lagive Vine
          </h2>
          <p className="mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
            Experience the difference with our premium wine selection
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
