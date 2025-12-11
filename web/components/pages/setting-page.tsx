"use client"

import { Bell, Moon, Globe, Shield, HelpCircle, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

const settingsItems = [
  { name: "Notifications", icon: Bell, description: "Manage alerts" },
  { name: "Appearance", icon: Moon, description: "Dark mode, themes" },
  { name: "Language", icon: Globe, description: "English (US)" },
  { name: "Privacy", icon: Shield, description: "Data & security" },
  { name: "Help", icon: HelpCircle, description: "FAQ & support" },
]

export function SettingsPage() {
  return (
    <div className="flex-1 flex flex-col px-[4vw]" style={{ paddingTop: "2vh" }}>
      {/* Header */}
      <motion.div
        className="flex items-center"
        style={{ marginBottom: "3vh" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-foreground font-bold" style={{ fontSize: "5vw", marginLeft: "4vw" }}>
          Settings
        </h1>
      </motion.div>

      {/* Settings List */}
      <div
        className="backdrop-blur-xl rounded-3xl border border-border overflow-hidden"
        style={{ background: "rgba(255, 255, 255, 0.08)" }}
      >
        {settingsItems.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.button
              key={item.name}
              className="w-full flex items-center justify-between transition-colors hover:bg-foreground/5"
              style={{
                padding: "4vw",
                borderBottom:
                  index < settingsItems.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
              }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, type: "spring", stiffness: 300 }}
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
            </motion.button>
          )
        })}
      </div>

      {/* Version */}
      <motion.p
        className="text-foreground/30 text-center"
        style={{ fontSize: "3vw", marginTop: "3vh" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Pekunden UI Beta1.0
      </motion.p>
    </div>
  )
}
