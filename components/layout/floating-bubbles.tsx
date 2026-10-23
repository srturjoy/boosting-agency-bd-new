import React from "react"

interface BubbleConfig {
  id: number
  size: number
  left: string
  top: string
  tone: "blue" | "cyan" | "purple"
  variant: "up-left" | "up-right" | "drift"
  duration: string
  delay: string
}

const BUBBLES: BubbleConfig[] = [
  { id: 1, size: 6, left: "7%", top: "16%", tone: "cyan", variant: "up-right", duration: "24s", delay: "-4s" },
  { id: 2, size: 9, left: "18%", top: "68%", tone: "blue", variant: "up-left", duration: "28s", delay: "-11s" },
  { id: 3, size: 5, left: "27%", top: "34%", tone: "purple", variant: "drift", duration: "22s", delay: "-7s" },
  { id: 4, size: 11, left: "36%", top: "82%", tone: "cyan", variant: "up-right", duration: "30s", delay: "-15s" },
  { id: 5, size: 7, left: "46%", top: "22%", tone: "blue", variant: "drift", duration: "25s", delay: "-9s" },
  { id: 6, size: 10, left: "54%", top: "58%", tone: "purple", variant: "up-left", duration: "29s", delay: "-18s" },
  { id: 7, size: 6, left: "64%", top: "14%", tone: "cyan", variant: "up-right", duration: "23s", delay: "-6s" },
  { id: 8, size: 12, left: "73%", top: "76%", tone: "blue", variant: "up-left", duration: "32s", delay: "-21s" },
  { id: 9, size: 5, left: "82%", top: "42%", tone: "cyan", variant: "drift", duration: "21s", delay: "-3s" },
  { id: 10, size: 8, left: "91%", top: "26%", tone: "purple", variant: "up-left", duration: "27s", delay: "-13s" },
  { id: 11, size: 7, left: "12%", top: "88%", tone: "purple", variant: "up-right", duration: "26s", delay: "-16s" },
  { id: 12, size: 9, left: "86%", top: "84%", tone: "cyan", variant: "up-left", duration: "31s", delay: "-8s" },
  { id: 13, size: 6, left: "41%", top: "48%", tone: "blue", variant: "drift", duration: "24s", delay: "-14s" },
  { id: 14, size: 8, left: "68%", top: "36%", tone: "blue", variant: "up-right", duration: "28s", delay: "-19s" },
]

export function FloatingBubbles() {
  return (
    <div
      aria-hidden="true"
      className="floating-bubbles-layer"
    >
      {BUBBLES.map((bubble) => (
        <span
          key={bubble.id}
          className={`floating-bubble floating-bubble--${bubble.tone} floating-bubble--${bubble.variant}`}
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: bubble.left,
            top: bubble.top,
            animationDuration: bubble.duration,
            animationDelay: bubble.delay,
          }}
        />
      ))}
    </div>
  )
}
