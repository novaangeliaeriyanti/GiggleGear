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
          {/* Container scrollable */}
          <div
            className="flex overflow-x-auto gap-3 mb-4 text-sm"
          >
            {categories?.map((category, index) => (
              <div
                key={index}
                onClick={() => handleChange(category.slug)}
                className={`group flex-shrink-0 flex flex-col items-center justify-center gap-1 cursor-pointer py-1
                  ${category.slug === selectedCategory ? "text-pink-400" : "text-black"}
                `}
              >
                <div className={`flex shrink-0 grow-0 items-center px-4 py-2 border-[1px] ${category.slug === selectedCategory ? "border-pink-400" : "border-neutral-300"} rounded-full`}>                
                  <span className="hover:text-pink-400 text-center">
                    {category.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
      </div>

    );
  };

export default CategoriesProduct