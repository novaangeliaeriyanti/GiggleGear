"use client"

import useCartStore from "@/stores/cartStore"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"

const ShoppingCartIcon = () => {
  const {cart, hasHydrated} = useCartStore()
  if (!hasHydrated) return null;
  return (
    <Link href="/cart" className="relative">
         <ShoppingCart className="w-6 h-6 hover:text-pink-400" />
         <span className="absolute text-white -right-3 -top-3 flex size-5 items-center justify-center rounded-full bg-[#EB003B]">
            {/* {cart.reduce((acc,item) => acc + item.quantity, 0)} */}2
        </span>
    </Link>
  )
}

export default ShoppingCartIcon