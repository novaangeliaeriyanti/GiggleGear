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
    {
      name: "Bags",
      icon: <Briefcase strokeWidth={1.5} className="w-4 h-4 md:w-12 md:h-12 lg:w-12 lg:h-12 group-hover/child:scale-125" />,
      slug: "bags",
    },
    {
      name: "Dresses",
      icon: <Venus strokeWidth={1.5} className="w-4 h-4 md:w-12 md:h-12 lg:w-12 lg:h-12 group-hover/child:scale-125" />,
      slug: "dresses",
    },
    {
      name: "Jackets",
      icon: <Shirt strokeWidth={1.5} className="w-4 h-4 md:w-12 md:h-12 lg:w-12 lg:h-12 group-hover/child:scale-125" />,
      slug: "jackets",
    },
    {
      name: "Gloves",
      icon: <Hand strokeWidth={1.5} className="w-4 h-4 md:w-12 md:h-12 lg:w-12 lg:h-12 group-hover/child:scale-125" />,
      slug: "gloves",
    },
    {
      name: "Jackets",
      icon: <Shirt strokeWidth={1.5} className="w-4 h-4 md:w-12 md:h-12 lg:w-12 lg:h-12 group-hover/child:scale-125" />,
      slug: "jackets",
    },
    {
      name: "Gloves",
      icon: <Hand strokeWidth={1.5} className="w-4 h-4 md:w-12 md:h-12 lg:w-12 lg:h-12 group-hover/child:scale-125" />,
      slug: "gloves",
    },
    {
      name: "Jackets",
      icon: <Shirt strokeWidth={1.5} className="w-4 h-4 md:w-12 md:h-12 lg:w-12 lg:h-12 group-hover/child:scale-125" />,
      slug: "jackets",
    },
    {
      name: "Gloves",
      icon: <Hand strokeWidth={1.5} className="w-4 h-4 md:w-12 md:h-12 lg:w-12 lg:h-12 group-hover/child:scale-125" />,
      slug: "gloves",
    },
    {
      name: "Jackets",
      icon: <Shirt strokeWidth={1.5} className="w-4 h-4 md:w-12 md:h-12 lg:w-12 lg:h-12 group-hover/child:scale-125" />,
      slug: "jackets",
    },
    {
      name: "Gloves",
      icon: <Hand strokeWidth={1.5} className="w-4 h-4 md:w-12 md:h-12 lg:w-12 lg:h-12 group-hover/child:scale-125" />,
      slug: "gloves",
    },
    {
      name: "Jackets",
      icon: <Shirt strokeWidth={1.5} className="w-4 h-4 md:w-12 md:h-12 lg:w-12 lg:h-12 group-hover/child:scale-125" />,
      slug: "jackets",
    },
    {
      name: "Gloves",
      icon: <Hand strokeWidth={1.5} className="w-4 h-4 md:w-12 md:h-12 lg:w-12 lg:h-12 group-hover/child:scale-125" />,
      slug: "gloves",
    },
    {
      name: "Jackets",
      icon: <Shirt strokeWidth={1.5} className="w-4 h-4 md:w-12 md:h-12 lg:w-12 lg:h-12 group-hover/child:scale-125" />,
      slug: "jackets",
    },
    {
      name: "Gloves",
      icon: <Hand strokeWidth={1.5} className="w-4 h-4 md:w-12 md:h-12 lg:w-12 lg:h-12 group-hover/child:scale-125" />,
      slug: "gloves",
    },
    {
      name: "Jackets",
      icon: <Shirt strokeWidth={1.5} className="w-4 h-4 md:w-12 md:h-12 lg:w-12 lg:h-12 group-hover/child:scale-125" />,
      slug: "jackets",
    },
    {
      name: "Gloves",
      icon: <Hand strokeWidth={1.5} className="w-4 h-4 md:w-12 md:h-12 lg:w-12 lg:h-12 group-hover/child:scale-125" />,
      slug: "gloves",
    },
        {
      name: "Jackets",
      icon: <Shirt strokeWidth={1.5} className="w-4 h-4 md:w-12 md:h-12 lg:w-12 lg:h-12 group-hover/child:scale-125" />,
      slug: "jackets",
    },
    {
      name: "Gloves",
      icon: <Hand strokeWidth={1.5} className="w-4 h-4 md:w-12 md:h-12 lg:w-12 lg:h-12 group-hover/child:scale-125" />,
      slug: "gloves",
    },
  ];

  const Categories = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const selectedCategory = searchParams.get("category");
    const scrollRef = useRef<HTMLDivElement>(null);
  
    const handleChange = (value: string | null) => {
      const params = new URLSearchParams(searchParams);
      params.set("category", value || "all");
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };
  
    const scroll = (direction: "left" | "right") => {
      const container = scrollRef.current;
      if (container) {
        const scrollAmount = 430;
        container.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    };
  
    return (
      <div className="group relative">
        {/* Tombol panah kiri */}
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll Left"
          className="
            absolute left-0 top-[53px] -translate-y-1/2 
            translate-x-[-40px] group-hover:translate-x-0
            opacity-0 group-hover:opacity-100
            pointer-events-none group-hover:pointer-events-auto
            transition-all duration-300 ease-in-out
            flex z-10 text-pink-400 border-2 border-dashed border-pink-400 p-2
            hover:text-white hover:bg-pink-400 rounded-full
          "
        >
           <ChevronLeft className="w-6 h-6" />
        </button>
  
        {/* Container scrollable */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-5 mb-4 text-sm scroll-smooth scrollbar-hidden md:mx-[44px] lg:mx-[44px]"
        >
          {categories?.map((category, index) => (
            <div
              key={index}
              onClick={() => handleChange(category.slug)}
              className={`group/child flex-shrink-0 flex flex-col items-center justify-center gap-2 cursor-pointer px-2 py-1
                ${category.slug === selectedCategory ? "bg-white" : "text-black"}
              `}
            >
              <div className="bg-[#d0f1f1] rounded-3xl md:rounded-3xl p-[24px] md:p-[30px] lg:p-[30px]">
                {category.icon}
              </div>
              <span className="font-bold group-hover/child:text-teal-400">
                {category.name}
              </span>
            </div>
          ))}
        </div>
  
        {/* Tombol panah kanan */}
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll Right"
          className="
            absolute right-0 top-[53px] -translate-y-1/2 
            -translate-x-[-40px] group-hover:translate-x-0
            opacity-0 group-hover:opacity-100
            pointer-events-none group-hover:pointer-events-auto
            transition-all duration-300 ease-in-out
            flex z-10 text-pink-400 border-2 border-dashed border-pink-400 p-2
            hover:text-white hover:bg-pink-400 rounded-full
          "
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    );
  };

export default Categories