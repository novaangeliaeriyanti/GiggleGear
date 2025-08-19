"use client"
import { ServiceHighlightsType } from "@/types";
import { Package, PackageOpen, ShieldCheck, Truck, Undo2 } from "lucide-react";

const ServiceHighlightsData: ServiceHighlightsType = [
    {
      id: 1,
      icon: <Truck strokeWidth={2} fill="white" className="text-pink-400 w-4 h-4 md:w-12 md:h-12 lg:w-12 lg:h-12 group-hover/child:scale-125" />,
      title: 'We Ship All Over Country',
    },
    {
      id: 2,
      icon: <Package strokeWidth={2} fill="white" className="text-pink-400 w-4 h-4 md:w-12 md:h-12 lg:w-12 lg:h-12 group-hover/child:scale-125" />,
      title: 'Free Shipping On All Orders',
    },
    {
      id: 3,
      icon: <Undo2 strokeWidth={2} className="text-pink-400 w-4 h-4 md:w-12 md:h-12 lg:w-12 lg:h-12 group-hover/child:scale-125" />,
      title: 'Free Return',
    },
    {
      id: 4,
      icon: <ShieldCheck strokeWidth={2} fill="white" className="text-pink-400 w-4 h-4 md:w-12 md:h-12 lg:w-12 lg:h-12 group-hover/child:scale-125" />,
      title: '100% Original Products',
    },
  ];

const ServiceHighlights = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-7xl">
        {ServiceHighlightsData.map((item) => (
          <div
            key={item.id}
            className="flex-1 bg-[url('/cloud.png')] px-4 bg-no-repeat bg-center bg-contain aspect-[4/3] flex items-center justify-center text-pink-400 font-bold rounded"
          >
            <div className="flex items-center justify-center gap-1 px-4">
                {item.icon}
                {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceHighlights