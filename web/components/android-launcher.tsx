"use client"

import { useState, useEffect } from "react"
import { ClockWidget } from "./launcher/clock-widget"
import { AppGrid } from "./pages/app-grid"
import { DockBar } from "./launcher/dock-bar"
import { SearchBar } from "./launcher/search-bar"
import { ProfilePage } from "./pages/profile-page"
import { SettingsPage } from "./pages/setting-page"

export const apps = [
  { name: "Absen Ayam", icon: "Egg", color: "#ffd52e", url: "https://forms.gle/Qb9cXycF1WmNJjgL6" },
  { name: "Kas", icon: "Coins", color: "#57a63d", url: "https://docs.google.com/spreadsheets/d/1-5BAz48RbzkrKsLnuSTjH0yLp1_BrIJgtgw_f1hkS_Y/edit?usp=drivesdk"},
  { name: "Dokumentasi", icon: "Camera", color: "#8096e8", url: "https://www.instagram.com/kata.pekunden/" },
  { name: "Instagram", icon: "Instagram", color: "#FF6B6B", url: "https://www.instagram.com/kata.pekunden/" },
]

export type AppType = (typeof apps)[number]

export function AndroidLauncher() {
  const [time, setTime] = useState(new Date())
  const [activePage, setActivePage] = useState<"Home" | "Profile" | "Settings">("Home")
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const filteredApps = apps.filter((app) => app.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* Wallpaper overlay */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: "url('/wallpaper.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Main Content Area */}
      <div
        className="relative flex flex-col"
        style={{
          paddingTop: "5vh",
          paddingBottom: "12vh",
          height: "100vh",
        }}
      >
        {activePage === "Home" && (
          <>
            <ClockWidget time={time} />
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            <AppGrid apps={filteredApps} showNoResults={searchQuery.length > 0 && filteredApps.length === 0} />
          </>
        )}

        {activePage === "Profile" && <ProfilePage onBack={() => setActivePage("Home")} />}

        {activePage === "Settings" && <SettingsPage onBack={() => setActivePage("Home")} />}
      </div>

      {/* Dock Bar */}
      <DockBar activePage={activePage} onPageChange={setActivePage} />

      {/* Home Indicator */}
      <div
        className="absolute left-1/2 -translate-x-1/2 rounded-full bg-foreground/30"
        style={{
          bottom: "1vh",
          width: "30vw",
          height: "0.5vh",
        }}
      />
    </div>
  )
}
