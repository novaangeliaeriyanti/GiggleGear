"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Check, Copy } from "lucide-react";

const VoucherBanner = () => {
  const [copied, setCopied] = useState(false);
  const voucherCode = "GG50OFF";

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(voucherCode)
        .then(() => {
          setCopied(true);
        //   setTimeout(() => setCopied(false), 2000);
        })
        .catch((err) => {
          console.error("Gagal menyalin kode:", err);
        });
    } else {
      console.warn("Clipboard API tidak tersedia.");
    }
  };
  
  return (
    <div className="flex justify-center">
    <div className="relative w-full bg-[#d0f1f1] text-pink-400 rounded-3xl bg-primary-50 bg-[url(/grid-line.png)] bg-cover bg-center overflow-visible flex items-center px-6 py-4 sm:py-6 sm:px-0 sm:max-w-xl md:max-w-3xl lg:max-w-7xl">
      {/* Image with translate */}
      <div className="absolute -top-8 w-12 h-12 md:w-20 md:h-20 lg:w-20 lg:h-20">
        <Image
          src="/excited-jump.avif"
          alt="Voucher Icon"
          width={112}
          height={112}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="md:ml-16 lg:ml-32 flex-1">
        <div className="flex flex-col gap-2 py-4 md:py-0 lg:py-0 md:flex-row lg:flex-row md:justify-between lg:justify-between">
            <div className="flex flex-col gap-2">
                <h3 className="text-heading-1 font-bold mb-1 mt-1.5 text-stroke-3 text-pink-400 text-2xl md:text-3xl lg:text-5xl">
                    Voucher Diskon 50%
                </h3>                
                <p className="text-sm sm:text-base text-pink-400 mb-2">Voucher 199K min. purchase 549K (T&C applied)</p>
            </div>
            <div className="flex items-center gap-2">
                <button
                    onClick={handleCopy}
                    className="text-sm font-bold w-full flex justify-center items-center gap-1 px-3 py-1.5 bg-pink-400 hover:bg-pink-700 text-white rounded-md transition"
                >
                    {copied ? (
                    <>
                        <Check className="w-4 h-4" /> {voucherCode}
                    </>
                    ) : (
                    <>
                        <Copy className="w-4 h-4" /> {voucherCode}
                    </>
                    )}
                </button>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default VoucherBanner;
