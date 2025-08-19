"use client"
import { ServiceHighlightsType } from "@/types";
import { Package, PackageOpen, ShieldCheck, Truck, Undo2 } from "lucide-react";
import Image from "next/image";

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
      icon: <ShieldCheck strokeWidth={2} className="text-pink-400 fill-white w-4 h-4 md:w-12 md:h-12 lg:w-12 lg:h-12 group-hover/child:scale-125" />,
      title: '100% Original Products',
    },
  ];

const ServiceHighlights = () => {
  return (
<div className="flex justify-center">
  <div className="flex w-full max-w-7xl gap-4">
    {ServiceHighlightsData.map((item) => (
      <div
        key={item.id}
        className="bg-[#d0f1f1] text-pink-400 rounded-xl bg-primary-50 bg-[url(/grid-line.png)] bg-cover bg-center overflow-visible flex items-center px-6 py-4 sm:py-4 sm:px-8"
      >
        <div className="flex items-center justify-center gap-1 px-4">
            <div className="text-heading-1 font-bold mb-1 mt-1.5 text-stroke-3 text-pink-400 text-md md:text-lg lg:text-lg">
              {item.icon}
            </div>
            <span className="text-heading-1 font-bold mb-1 mt-1.5 text-stroke-3 text-pink-400 text-md md:text-lg lg:text-lg">
              {item.title}
            </span>     
        </div>
      </div>
      // <div key={item.id} className="flex-1 relative bg-[#d0f1f1] text-pink-400 rounded-xl bg-primary-50 bg-[url(/grid-line.png)] bg-cover bg-center overflow-visible flex items-center">
      //   <div className="absolute -top-8 w-12 h-12 md:w-20 md:h-20 lg:w-20 lg:h-20">
      //     {item.icon}
      //     {/* <Image
      //       src="/excited-jump.avif"
      //       alt="Voucher Icon"
      //       width={112}
      //       height={112}
      //       className="object-contain"
      //     /> */}
      //   </div>
      //   <div className="flex-1">
      //     <div className="flex flex-col gap-2 py-4 px-4 md:flex-row lg:flex-row md:justify-between lg:justify-between">
      //         <div className="flex flex-col gap-2">
      //             <h3 className="text-heading-1 font-bold mb-1 mt-1.5 text-stroke-3 text-pink-400 text-md md:text-lg lg:text-lg">
      //                 {item.title}
      //             </h3>                
      //         </div>
      //     </div>
      //   </div>
      // </div>
    ))}
  </div>
</div>


  )
}

export default ServiceHighlights