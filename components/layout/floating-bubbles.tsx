import React from "react"

export type BubbleTone =
  | "cyan"
  | "blue"
  | "purple"
  | "emerald"
  | "pink"
  | "amber"
  | "violet"
  | "teal"

export type BubbleVariant =
  | "up-left"
  | "up-right"
  | "drift"
  | "rise-sway"
  | "orbit"

interface BubbleConfig {
  id: number
  size: number
  left: string
  top: string
  tone: BubbleTone
  variant: BubbleVariant
  duration: string
  delay: string
}

const BUBBLES: BubbleConfig[] = [
  { id: 1, size: 4, left: "3%", top: "12%", tone: "cyan", variant: "up-right", duration: "10s", delay: "-1s" },
  { id: 2, size: 6, left: "8%", top: "38%", tone: "pink", variant: "rise-sway", duration: "12s", delay: "-4s" },
  { id: 3, size: 5, left: "6%", top: "68%", tone: "emerald", variant: "up-left", duration: "11s", delay: "-7s" },
  { id: 4, size: 7, left: "11%", top: "86%", tone: "purple", variant: "orbit", duration: "13s", delay: "-3s" },
  { id: 5, size: 4, left: "14%", top: "22%", tone: "amber", variant: "drift", duration: "9s", delay: "-5s" },
  { id: 6, size: 6, left: "16%", top: "52%", tone: "blue", variant: "up-right", duration: "11.5s", delay: "-2s" },
  { id: 7, size: 7, left: "19%", top: "78%", tone: "cyan", variant: "rise-sway", duration: "12.5s", delay: "-8s" },
  { id: 8, size: 4, left: "22%", top: "15%", tone: "violet", variant: "up-left", duration: "10.5s", delay: "-6s" },
  { id: 9, size: 8, left: "25%", top: "44%", tone: "teal", variant: "orbit", duration: "14s", delay: "-9s" },
  { id: 10, size: 5, left: "28%", top: "88%", tone: "pink", variant: "up-right", duration: "11s", delay: "-1.5s" },
  { id: 11, size: 4, left: "31%", top: "28%", tone: "emerald", variant: "drift", duration: "9.5s", delay: "-4.5s" },
  { id: 12, size: 6, left: "34%", top: "62%", tone: "amber", variant: "rise-sway", duration: "12s", delay: "-7.5s" },
  { id: 13, size: 5, left: "37%", top: "10%", tone: "blue", variant: "up-left", duration: "10s", delay: "-2.5s" },
  { id: 14, size: 7, left: "39%", top: "80%", tone: "purple", variant: "up-right", duration: "13.5s", delay: "-10s" },
  { id: 15, size: 5, left: "42%", top: "35%", tone: "cyan", variant: "orbit", duration: "11s", delay: "-3.5s" },
  { id: 16, size: 6, left: "45%", top: "56%", tone: "pink", variant: "up-left", duration: "10.5s", delay: "-6.5s" },
  { id: 17, size: 4, left: "48%", top: "19%", tone: "teal", variant: "rise-sway", duration: "9s", delay: "-5.5s" },
  { id: 18, size: 7, left: "50%", top: "85%", tone: "emerald", variant: "drift", duration: "12s", delay: "-8.5s" },
  { id: 19, size: 5, left: "53%", top: "42%", tone: "amber", variant: "up-right", duration: "10s", delay: "-1.8s" },
  { id: 20, size: 6, left: "56%", top: "70%", tone: "violet", variant: "orbit", duration: "12.5s", delay: "-4.2s" },
  { id: 21, size: 5, left: "59%", top: "14%", tone: "pink", variant: "up-left", duration: "11s", delay: "-9.2s" },
  { id: 22, size: 8, left: "61%", top: "48%", tone: "cyan", variant: "rise-sway", duration: "14s", delay: "-2.8s" },
  { id: 23, size: 4, left: "64%", top: "82%", tone: "blue", variant: "up-right", duration: "9.5s", delay: "-6.8s" },
  { id: 24, size: 6, left: "67%", top: "26%", tone: "emerald", variant: "drift", duration: "11.5s", delay: "-3.2s" },
  { id: 25, size: 7, left: "70%", top: "64%", tone: "purple", variant: "up-left", duration: "13s", delay: "-7.2s" },
  { id: 26, size: 4, left: "73%", top: "11%", tone: "amber", variant: "orbit", duration: "10s", delay: "-5.1s" },
  { id: 27, size: 6, left: "75%", top: "39%", tone: "teal", variant: "up-right", duration: "12s", delay: "-8.1s" },
  { id: 28, size: 5, left: "78%", top: "76%", tone: "pink", variant: "rise-sway", duration: "10.5s", delay: "-1.2s" },
  { id: 29, size: 7, left: "81%", top: "22%", tone: "violet", variant: "up-left", duration: "13.5s", delay: "-4.8s" },
  { id: 30, size: 4, left: "84%", top: "54%", tone: "cyan", variant: "drift", duration: "9.8s", delay: "-6.2s" },
  { id: 31, size: 6, left: "87%", top: "86%", tone: "emerald", variant: "up-right", duration: "11.2s", delay: "-9.5s" },
  { id: 32, size: 4, left: "89%", top: "16%", tone: "amber", variant: "rise-sway", duration: "9.2s", delay: "-2.2s" },
  { id: 33, size: 7, left: "92%", top: "46%", tone: "blue", variant: "orbit", duration: "12.8s", delay: "-7.8s" },
  { id: 34, size: 5, left: "95%", top: "72%", tone: "purple", variant: "up-left", duration: "10.8s", delay: "-3.8s" },
  { id: 35, size: 4, left: "97%", top: "30%", tone: "pink", variant: "up-right", duration: "10.2s", delay: "-5.8s" },
  { id: 36, size: 6, left: "13%", top: "94%", tone: "teal", variant: "rise-sway", duration: "11.4s", delay: "-2.4s" },
  { id: 37, size: 4, left: "29%", top: "95%", tone: "cyan", variant: "up-right", duration: "10.4s", delay: "-6.4s" },
  { id: 38, size: 5, left: "46%", top: "92%", tone: "amber", variant: "up-left", duration: "10.6s", delay: "-4.4s" },
  { id: 39, size: 6, left: "63%", top: "94%", tone: "pink", variant: "orbit", duration: "12.2s", delay: "-8.4s" },
  { id: 40, size: 4, left: "79%", top: "93%", tone: "emerald", variant: "rise-sway", duration: "10.1s", delay: "-1.4s" },
  { id: 41, size: 5, left: "5%", top: "50%", tone: "violet", variant: "drift", duration: "11.6s", delay: "-7.4s" },
  { id: 42, size: 5, left: "93%", top: "90%", tone: "cyan", variant: "up-left", duration: "11.1s", delay: "-5.4s" },
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
