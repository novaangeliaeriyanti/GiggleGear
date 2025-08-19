"use client"
import { log } from "console";
import {
    Footprints,
    Glasses,
    Briefcase,
    Shirt,
    ShoppingBasket,
    Hand,
    Venus,
    ChevronRight,
    ChevronLeft,
  } from "lucide-react";
import Image from "next/image";
  import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";
  
  const categories = [
    {
      name: "All",
      icon: <ShoppingBasket strokeWidth={1.5} className="w-4 h-4 md:w-12 md:h-12 lg:w-12 lg:h-12 group-hover/child:scale-125" />,
      slug: "all",
    },
    {
      name: "T-shirts",
      icon: <Shirt strokeWidth={1.5} className="w-4 h-4 md:w-12 md:h-12 lg:w-12 lg:h-12 group-hover/child:scale-125" />,
      slug: "t-shirts",
    },
    {
      name: "Shoes",
      icon: <Footprints strokeWidth={1.5} className="w-4 h-4 md:w-12 md:h-12 lg:w-12 lg:h-12 group-hover/child:scale-125" />,
      slug: "shoes",
    },
    {
      name: "Accessories",
      icon: <Glasses strokeWidth={1.5} className="w-4 h-4 md:w-12 md:h-12 lg:w-12 lg:h-12 group-hover/child/child:scale-125" />,
      slug: "accessories",
    },
  ]

  const CategoriesProduct = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const selectedCategory = searchParams.get("category");
    const handleChange = (value: string | null) => {
      const params = new URLSearchParams(searchParams);
      params.set("category", value || "all");
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

  
    return (
      <div className="flex flex-col gap-4">
          {categories?.map((category, index) => (
            <div
              key={index}
              onClick={() => handleChange(category.slug)}
              className={`group w-full relative cursor-pointer flex items-center justify-center 
                ${category.slug === selectedCategory ? "text-pink-400" : "text-teal-400"}
              `}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/cloud.png"
                alt={category.name}
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-pink-400 font-bold text-center group-hover:scale-110 transition-transform duration-200 px-3 py-1">
                  {category.name}
                </span>
              </div>
            </div>
          ))}
      </div>
    );
  };

export default CategoriesProduct