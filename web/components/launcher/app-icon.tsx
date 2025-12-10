"use client";

interface AppIconProps {
  name: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  color: string;
  url: string;
  isPressed: boolean;
  onPressStart: () => void;
  onPressEnd: () => void;
}

export function AppIcon({
  name,
  icon: Icon,
  color,
  url,
  isPressed,
  onPressStart,
  onPressEnd,
}: AppIconProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center transition-transform duration-150"
      style={{
        transform: isPressed ? "scale(0.9)" : "scale(1)",
      }}
      onMouseDown={onPressStart}
      onMouseUp={onPressEnd}
      onMouseLeave={onPressEnd}
      onTouchStart={onPressStart}
      onTouchEnd={onPressEnd}
    >
      <div
        className="flex items-center justify-center rounded-2xl shadow-lg"
        style={{
          width: "15vw",
          height: "15vw",
          background: `linear-gradient(135deg, ${color} 0%, ${color}CC 100%)`,
          boxShadow: `0 4px 15px ${color}40`,
        }}
      >
        <Icon
          className="text-white"
          style={{
            width: "8vw",
            height: "8vw",
          }}
        />
      </div>
      <span
        className="text-foreground/90 font-medium text-center truncate"
        style={{
          marginTop: "1vh",
          fontSize: "2.8vw",
          width: "18vw",
        }}
      >
        {name}
      </span>
    </a>
  );
}
