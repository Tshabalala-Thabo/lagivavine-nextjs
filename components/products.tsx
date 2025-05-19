"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type { Wine } from "@/types"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProductsProps {
  wines: Wine[]
}

export default function Products({ wines }: ProductsProps) {
  const wineTypes = ["All", "Red", "White", "Sparkling", "Sweet", "Custom"]
  const [activeTab, setActiveTab] = useState("All")

  const filteredWines = activeTab === "All" ? wines : wines.filter((wine) => wine.type.includes(activeTab))

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif">Our Collection</h2>
          <p className="mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
            Explore our exquisite selection of premium wines
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100">
              {wineTypes.map((type) => (
                <TabsTrigger
                  key={type}
                  value={type}
                  className="data-[state=active]:bg-[#B50101] data-[state=active]:text-white"
                >
                  {type}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWines.map((wine, index) => (
                <motion.div
                  key={wine.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col overflow-hidden">
                    <div className="aspect-square relative overflow-hidden bg-gray-50">
                      <img
                        src={wine.image || `/placeholder.svg?height=300&width=300`}
                        alt={wine.name}
                        className="object-contain w-full h-full transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{wine.name}</CardTitle>
                          <p className="text-sm text-gray-500">{wine.type}</p>
                        </div>
                        <span className="font-bold text-[#B50101]">R{wine.price.toFixed(2)}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription>{wine.description}</CardDescription>
                    </CardContent>
                    {/* <CardFooter>
                      <Button className="w-full bg-white text-[#B50101] border border-[#B50101] hover:bg-[#B50101] hover:text-white transition-colors">
                        Add to Cart
                      </Button>
                    </CardFooter> */}
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
