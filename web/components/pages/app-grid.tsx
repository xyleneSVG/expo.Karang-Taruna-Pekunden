"use client"

import type React from "react"

import { useState } from "react"
import { AppIcon } from "../launcher/app-icon"
import type { AppType } from "../android-launcher"
import {
  Egg,
  Coins,
  Camera,
  Twitter,
  Youtube,
  Github,
  Linkedin,
  Mail,
  Globe,
  Music,
  Instagram,
  ShoppingBag,
  MessageCircle,
  Twitch,
  Coffee,
  Briefcase,
  BookOpen,
  SearchX,
} from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Egg,
  Coins,
  Camera,
  Twitter,
  Youtube,
  Github,
  Linkedin,
  Mail,
  Globe,
  Music,
  Instagram,
  ShoppingBag,
  MessageCircle,
  Twitch,
  Coffee,
  Briefcase,
  BookOpen,
}

interface AppGridProps {
  apps: AppType[]
  showNoResults?: boolean
}

export function AppGrid({ apps, showNoResults }: AppGridProps) {
  const [pressedApp, setPressedApp] = useState<string | null>(null)

  if (showNoResults) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center" style={{ marginTop: "3vh" }}>
        <SearchX className="text-foreground/30" style={{ width: "15vw", height: "15vw" }} />
        <p className="text-foreground/50 font-medium" style={{ fontSize: "4vw", marginTop: "2vh" }}>
          No links found
        </p>
      </div>
    )
  }

  return (
    <div
      className="flex-1 overflow-y-auto px-[4vw]"
      style={{
        marginTop: "3vh",
        paddingBottom: "2vh",
      }}
    >
      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "3vw",
          rowGap: "2.5vh",
        }}
      >
        {apps.map((app) => {
          const IconComponent = iconMap[app.icon]
          return (
            <AppIcon
              key={app.name}
              name={app.name}
              icon={IconComponent}
              color={app.color}
              url={app.url}
              isPressed={pressedApp === app.name}
              onPressStart={() => setPressedApp(app.name)}
              onPressEnd={() => setPressedApp(null)}
            />
          )
        })}
      </div>
    </div>
  )
}
