"use client"

interface ClockWidgetProps {
  time: Date
}

export function ClockWidget({ time }: ClockWidgetProps) {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div
      className="flex flex-col items-center justify-center backdrop-blur-xl rounded-3xl border border-border mx-auto"
      style={{
        width: "90vw",
        padding: "4vw",
        marginTop: "2vh",
        background: "rgba(255, 255, 255, 0.08)",
      }}
    >
      <span className="font-bold text-foreground tracking-tight" style={{ fontSize: "14vw", lineHeight: 1 }}>
        {formatTime(time)}
      </span>
      <span className="text-foreground/70 font-medium" style={{ fontSize: "4vw", marginTop: "1vh" }}>
        {formatDate(time)}
      </span>
    </div>
  )
}
