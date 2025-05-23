import Link from "next/link"
import { Wine } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-[#161616] text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Wine className="h-6 w-6" />
              <span className="text-xl font-bold">Lagiva Vinery</span>
            </Link>
            <p className="text-gray-400">Premium wines for discerning tastes.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">6880 Block F4, New Eersterus, Hammanskraal 0400</li>
              <li className="text-gray-400">admin@lagivevinery.co.za</li>
              <li className="text-gray-400">081 449 8919</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Lagiva Vinery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
