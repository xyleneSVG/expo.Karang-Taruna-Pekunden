"use client"

import { Search, X } from "lucide-react"

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  onFocus: () => void
  onBlur: () => void
}

export function SearchBar({ value, onChange, onFocus, onBlur }: SearchBarProps) {
  return (
    <div
      className="mx-auto flex items-center backdrop-blur-xl rounded-full border border-border"
      style={{
        width: "90vw",
        height: "6vh",
        marginTop: "3vh",
        paddingLeft: "4vw",
        paddingRight: "4vw",
        background: "rgba(255, 255, 255, 0.08)",
      }}
    >
      <Search className="text-foreground/50" style={{ width: "5vw", height: "5vw" }} />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder="Search links..."
        className="flex-1 bg-transparent text-foreground placeholder:text-foreground/50 font-medium outline-none"
        style={{ marginLeft: "3vw", fontSize: "3.5vw" }}
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="flex items-center justify-center rounded-full bg-foreground/20"
          style={{ width: "5vw", height: "5vw" }}
        >
          <X className="text-foreground" style={{ width: "3vw", height: "3vw" }} />
        </button>
      )}
    </div>
  )
}
