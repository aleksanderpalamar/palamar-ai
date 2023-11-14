"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { Logo } from "../logo";

import { usePathname } from "next/navigation";
import { router } from "./routerSidebar";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full
    bg-[#111827] text-white" >
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative mr-4 hover:bg-violet-500/10 px-1 rounded">
            <Logo />
          </div>
        </Link>
        <div className="space-y-1">
          {router.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-violet-500/10 rounded hover:text-white/80 transition",
                pathname === item.href ? "bg-violet-500/10 text-white" : "text-zinc-400"
              )}              
            >
              <div className="flex items-center flex-1">
                <item.icon className={cn("w-5 h-5 mr-3", item.color)} />
                {item.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}