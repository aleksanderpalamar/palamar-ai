"use client";

import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  MusicIcon,
  Settings,
  VideoIcon,
} from "lucide-react";

export const router = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-blue-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-500",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-yellow-500/80",
  },
  {
    label: "Music Generation",
    icon: MusicIcon,
    href: "/music",
    color: "text-sky-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-emerald-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];
