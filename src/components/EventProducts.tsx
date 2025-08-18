'use client';

import Image from 'next/image';
import { useRef } from 'react';
import ProductCard from '@/components/ProductCard';
import { ProductsType } from '@/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Categories from './Categories';
import { cn } from '@/utils/utils';

const products: ProductsType = [
    {
      id: 1,
      name: "Adidas CoreFit T-Shirt",
      shortDescription:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 39.9,
      sizes: ["s", "m", "l", "xl", "xxl"],
      colors: ["gray", "purple", "green"],
      images: {
        gray: "/products/1g.png",
        purple: "/products/1p.png",
        green: "/products/1gr.png",
      },
    },
    {
      id: 2,
      name: "Puma Ultra Warm Zip",
      shortDescription:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 59.9,
      sizes: ["s", "m", "l", "xl"],
      colors: ["gray", "green"],
      images: { gray: "/products/2g.png", green: "/products/2gr.png" },
    },
    {
      id: 3,
      name: "Nike Air Essentials Pullover",
      shortDescription:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 69.9,
      sizes: ["s", "m", "l"],
      colors: ["green", "blue", "black"],
      images: {
        green: "/products/3gr.png",
        blue: "/products/3b.png",
        black: "/products/3bl.png",
      },
    },
    {
      id: 4,
      name: "Nike Dri Flex T-Shirt",
      shortDescription:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 29.9,
      sizes: ["s", "m", "l"],
      colors: ["white", "pink"],
      images: { white: "/products/4w.png", pink: "/products/4p.png" },
    },
    {
      id: 5,
      name: "Under Armour StormFleece",
      shortDescription:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 49.9,
      sizes: ["s", "m", "l"],
      colors: ["red", "orange", "black"],
      images: {
        red: "/products/5r.png",
        orange: "/products/5o.png",
        black: "/products/5bl.png",
      },
    },
    {
      id: 6,
      name: "Nike Air Max 270",
      shortDescription:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 59.9,
      sizes: ["40", "42", "43", "44"],
      colors: ["gray", "white"],
      images: { gray: "/products/6g.png", white: "/products/6w.png" },
    },
    {
      id: 7,
      name: "Nike Ultraboost Pulse ",
      shortDescription:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 69.9,
      sizes: ["40", "42", "43"],
      colors: ["gray", "pink"],
      images: { gray: "/products/7g.png", pink: "/products/7p.png" },
    },
    {
      id: 8,
      name: "Levi’s Classic Denim",
      shortDescription:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 59.9,
      sizes: ["s", "m", "l"],
      colors: ["blue", "green"],
      images: { blue: "/products/8b.png", green: "/products/8gr.png" },
    },
  ];
export default function EventProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
    scrollRef.current.scrollTo({
      left: scrollLeft + scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex justify-center">
      <div className=" group w-full flex flex-col gap-4 sm:px-0 sm:max-w-xl md:max-w-3xl lg:max-w-7xl">
        <Categories />
        <div className="flex items-center gap-2 text-3xl font-bold">
          <span className="flex space-x-2 text-teal-400">
            <span>Popular</span>
          </span>
          <span className="flex text-pink-400 space-x-2">
            <span>Products</span>
            </span>
        </div>
        <div className='relative w-full flex flex-col'>
          <div className="absolute rounded-3xl top-0 left-0 h-full w-full block z-0">
            <Image
              src="/event-banner.avif"
              alt="Background Visual"
              className="h-full w-[240px] object-cover rounded-3xl"
              width={240}
              height={360}
            />
          </div>
          <button
                onClick={() => scroll("left")}
                aria-label="Scroll Left"
                className="
                  absolute left-0 top-1/2 -translate-y-1/2 
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

          <div
            ref={scrollRef}
            className="flex gap-5 z-9 overflow-x-auto scroll-smooth py-4 h-full scrollbar-hidden scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
          >
            {products?.map((product, index) => (
              <div
                key={product.id}
                className={cn(
                  "w-[150px] md:w-[300px] lg:w-[300px] flex-shrink-0 rounded",
                  index === 0 && "ml-10 md:ml-32 lg:ml-42" // atau `mr-24` 
                )}
                
              >
                <ProductCard key={product.id} product={product} />
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll Right"
            className="
              absolute right-0 top-1/2 -translate-y-1/2 
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
      </div>
    </div>
  );
}
