"use client";

import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["600"], 
})

export const Logo = () => {
  return (
    <h1 className={cn(
      "text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500 font-bold text-lg",
      poppins.className
    )}>
      Palamar.AI
    </h1>
  )
}