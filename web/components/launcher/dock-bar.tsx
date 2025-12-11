"use client";

import { Home, User, Settings } from "lucide-react";
import { motion } from "framer-motion";

interface DockBarProps {
  activePage: "Home" | "Profile" | "Settings";
  onPageChange: (page: "Home" | "Profile" | "Settings") => void;
}

const dockApps = [
  { name: "Home" as const, icon: Home },
  { name: "Profile" as const, icon: User },
  { name: "Settings" as const, icon: Settings },
];

export function DockBar({ activePage, onPageChange }: DockBarProps) {
  return (
    <motion.div
      className="absolute left-1/2 -translate-x-1/2 bottom-0 flex items-center justify-around backdrop-blur-2xl rounded-3xl border border-border"
      style={{
        bottom: "10vh",
        width: "85vw",
        height: "9vh",
        background: "rgba(255, 255, 255, 0.1)",
        paddingLeft: "2vw",
        paddingRight: "2vw",
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
    >
      {dockApps.map((app, index) => {
        const Icon = app.icon;
        const isActive = activePage === app.name;

        return (
          <motion.button
            key={app.name}
            onClick={() => onPageChange(app.name)}
            className="flex flex-col items-center justify-center"
            style={{
              width: "16vw",
              height: "8vh",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 1.1 }}
          >
            <motion.div
              className="flex items-center justify-center rounded-xl"
              style={{
                width: "12vw",
                height: "6vh",
                background: isActive
                  ? "rgba(255, 255, 255, 0.2)"
                  : "transparent",
              }}
              animate={{
                scale: isActive ? 1.1 : 1,
                opacity: isActive ? 1 : 0.6,
                background: isActive
                  ? "rgba(255, 255, 255, 0.2)"
                  : "transparent",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Icon
                className="text-foreground"
                style={{
                  width: "6vw",
                  height: "6vw",
                }}
              />
            </motion.div>
          </motion.button>
        );
      })}
    </motion.div>
  );
}
