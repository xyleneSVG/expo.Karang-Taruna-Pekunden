"use client"

import { ArrowLeft, Bell, Moon, Globe, Shield, HelpCircle, ChevronRight } from "lucide-react"

interface SettingsPageProps {
  onBack: () => void
}

const settingsItems = [
  { name: "Notifications", icon: Bell, description: "Manage alerts" },
  { name: "Appearance", icon: Moon, description: "Dark mode, themes" },
  { name: "Language", icon: Globe, description: "English (US)" },
  { name: "Privacy", icon: Shield, description: "Data & security" },
  { name: "Help", icon: HelpCircle, description: "FAQ & support" },
]

export function SettingsPage({ onBack }: SettingsPageProps) {
  return (
    <div className="flex-1 flex flex-col px-[4vw]" style={{ paddingTop: "2vh" }}>
      {/* Header */}
      <div className="flex items-center" style={{ marginBottom: "3vh" }}>
        <button
          onClick={onBack}
          className="flex items-center justify-center rounded-full bg-foreground/10"
          style={{ width: "10vw", height: "10vw" }}
        >
          <ArrowLeft className="text-foreground" style={{ width: "5vw", height: "5vw" }} />
        </button>
        <h1 className="text-foreground font-bold" style={{ fontSize: "5vw", marginLeft: "4vw" }}>
          Settings
        </h1>
      </div>

      {/* Settings List */}
      <div
        className="backdrop-blur-xl rounded-3xl border border-border overflow-hidden"
        style={{ background: "rgba(255, 255, 255, 0.08)" }}
      >
        {settingsItems.map((item, index) => {
          const Icon = item.icon
          return (
            <button
              key={item.name}
              className="w-full flex items-center justify-between transition-colors hover:bg-foreground/5"
              style={{
                padding: "4vw",
                borderBottom: index < settingsItems.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
              }}
            >
              <div className="flex items-center">
                <div
                  className="flex items-center justify-center rounded-xl bg-foreground/10"
                  style={{ width: "10vw", height: "10vw" }}
                >
                  <Icon className="text-foreground" style={{ width: "5vw", height: "5vw" }} />
                </div>
                <div className="flex flex-col items-start" style={{ marginLeft: "4vw" }}>
                  <span className="text-foreground font-medium" style={{ fontSize: "3.8vw" }}>
                    {item.name}
                  </span>
                  <span className="text-foreground/50" style={{ fontSize: "3vw" }}>
                    {item.description}
                  </span>
                </div>
              </div>
              <ChevronRight className="text-foreground/30" style={{ width: "5vw", height: "5vw" }} />
            </button>
          )
        })}
      </div>

      {/* Version */}
      <p className="text-foreground/30 text-center" style={{ fontSize: "3vw", marginTop: "3vh" }}>
        Pekunden UI Beta1.0
      </p>
    </div>
  )
}
