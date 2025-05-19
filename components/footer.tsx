import Link from "next/link"
import { Wine } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-[#161616] text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Wine className="h-6 w-6" />
              <span className="text-xl font-bold">Lagive Vine</span>
            </Link>
            <p className="text-gray-400">Premium wines for discerning tastes.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Our Collection
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Wine Club
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">123 Vineyard Lane, Wine Valley</li>
              <li className="text-gray-400">info@lagivevine.com</li>
              <li className="text-gray-400">+1 (234) 567-8900</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Lagive Vine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
