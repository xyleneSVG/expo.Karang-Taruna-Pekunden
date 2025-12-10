/* eslint-disable @next/next/no-img-element */
"use client"

import { ArrowLeft, MapPin, Calendar, Mail } from "lucide-react"
import { apps } from "../android-launcher"

interface ProfilePageProps {
  onBack: () => void
}

export function ProfilePage({ onBack }: ProfilePageProps) {
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
          Profile
        </h1>
      </div>

      {/* Profile Card */}
      <div
        className="backdrop-blur-xl rounded-3xl border border-border"
        style={{
          background: "rgba(255, 255, 255, 0.08)",
          padding: "5vw",
        }}
      >
        {/* Avatar */}
        <div className="flex flex-col items-center">
          <div
            className="rounded-full overflow-hidden border-4 border-foreground/20"
            style={{ width: "25vw", height: "25vw" }}
          >
            <img src="/profile.png" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-foreground font-bold" style={{ fontSize: "5vw", marginTop: "2vh" }}>
            &quot;Nama Karang Taruna&quot;
          </h2>
          <p className="text-foreground/60" style={{ fontSize: "3.5vw", marginTop: "0.5vh" }}>
            @kata.pekunden
          </p>
        </div>

        {/* Bio */}
        <p className="text-foreground/80 text-center" style={{ fontSize: "3.5vw", marginTop: "2vh", lineHeight: 1.5 }}>
          digitalization of inventory and administration of the Karang Taruna Pekunden.
        </p>

        {/* Stats */}
        <div
          className="flex justify-around"
          style={{ marginTop: "3vh", paddingTop: "2vh", borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <div className="flex flex-col items-center">
            <span className="text-foreground font-bold" style={{ fontSize: "5vw" }}>
              {apps.length}
            </span>
            <span className="text-foreground/60" style={{ fontSize: "3vw" }}>
              Links
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-foreground font-bold" style={{ fontSize: "5vw" }}>
              2
            </span>
            <span className="text-foreground/60" style={{ fontSize: "3vw" }}>
              Media Sosial
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-foreground font-bold" style={{ fontSize: "5vw" }}>
              15
            </span>
            <span className="text-foreground/60" style={{ fontSize: "3vw" }}>
              Members
            </span>
          </div>
        </div>

        {/* Info */}
        <div style={{ marginTop: "3vh" }}>
          <div className="flex items-center" style={{ marginBottom: "1.5vh" }}>
            <MapPin className="text-foreground/60" style={{ width: "4vw", height: "4vw" }} />
            <span className="text-foreground/80" style={{ fontSize: "3.5vw", marginLeft: "2vw" }}>
              Pekunden, Kota Semarang, Jawa Tengah
            </span>
          </div>
          <div className="flex items-center" style={{ marginBottom: "1.5vh" }}>
            <Mail className="text-foreground/60" style={{ width: "4vw", height: "4vw" }} />
            <span className="text-foreground/80" style={{ fontSize: "3.5vw", marginLeft: "2vw" }}>
              ktrpekunden@gmail.com
            </span>
          </div>
          <div className="flex items-center">
            <Calendar className="text-foreground/60" style={{ width: "4vw", height: "4vw" }} />
            <span className="text-foreground/80" style={{ fontSize: "3.5vw", marginLeft: "2vw" }}>
              Since 06 Desember 2025
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
