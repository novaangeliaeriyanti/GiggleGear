import Image from "next/image"
import Link from "next/link"
import SearchBar from "./SearchBar"
import { Bell, Home } from "lucide-react"
import ShoppingCartIcon from "./ShoppingCartIcon"

const Navbar = () => {
  return (
    <nav className="fixed w-full flex items-center justify-center border-b bg-white z-50 border-gray-200 py-4 px-4 lg:px-6 lg:py-5">
        <div className="flex items-center w-full justify-between sm:max-w-xl md:max-w-3xl lg:max-w-7xl lg:px-6">
          {/* LEFT */}
          <Link href="/" className="flex items-center">
              <div className="hidden md:block text-2xl font-extrabold tracking-wider">
                <div className="flex items-center">
                  <p className="text-teal-400">Giggle</p>
                  <p className="text-pink-400">Gear</p>
                </div>
              </div>
          </Link>
          {/* RIGHT */}
          <div className="flex items-center gap-6">
              <SearchBar />
              <Link href="/">
                  <Home className="w-6 h-6 hover:text-pink-400"/>
              </Link>
              <Bell className="w-6 h-6 hover:text-pink-400"/>
              <ShoppingCartIcon />
              <Link className="hover:text-pink-400" href="/login">Sign In</Link>
          </div>
        </div>
    </nav>
  )
}

export default Navbar