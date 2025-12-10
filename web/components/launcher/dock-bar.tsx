"use client"

import { Home, Camera, User, Settings } from "lucide-react"

interface DockBarProps {
  activePage: "Home" | "Profile" | "Settings"
  onPageChange: (page: "Home" | "Profile" | "Settings") => void
}

const dockApps = [
  { name: "Home" as const, icon: Home },
  { name: "Profile" as const, icon: User },
  { name: "Settings" as const, icon: Settings },
]

export function DockBar({ activePage, onPageChange }: DockBarProps) {
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 flex items-center justify-around backdrop-blur-2xl rounded-3xl border border-border"
      style={{
        bottom: "3vh",
        width: "85vw",
        height: "9vh",
        background: "rgba(255, 255, 255, 0.1)",
        paddingLeft: "2vw",
        paddingRight: "2vw",
      }}
    >
      {dockApps.map((app) => {
        const Icon = app.icon
        const isActive = activePage === app.name

        return (
          <button
            key={app.name}
            onClick={() => onPageChange(app.name)}
            className="flex flex-col items-center justify-center transition-all duration-200"
            style={{
              width: "16vw",
              height: "8vh",
              opacity: isActive ? 1 : 0.6,
              transform: isActive ? "scale(1.1)" : "scale(1)",
            }}
          >
            <div
              className="flex items-center justify-center rounded-xl transition-colors"
              style={{
                width: "12vw",
                height: "6vh",
                background: isActive ? "rgba(255, 255, 255, 0.2)" : "transparent",
              }}
            >
              <Icon
                className="text-foreground"
                style={{
                  width: "6vw",
                  height: "6vw",
                }}
              />
            </div>
          </button>
        )
      })}
    </div>
  )
}
