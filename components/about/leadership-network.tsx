"use client"

import React, { useEffect, useRef, useState, useCallback } from "react"

interface ConnectionPath {
  id: string
  memberId: string
  index: number
  startX: number
  startY: number
  endX: number
  endY: number
  d: string
  delaySec: number
  durationSec: number
}

interface LeadershipNetworkContainerProps {
  children: React.ReactNode
  className?: string
  /** Cycle duration in seconds for energy transmission */
  cycleDurationSec?: number
  /** Stagger delay in seconds between each connection */
  staggerSec?: number
}

const DEFAULT_CYCLE_SEC = 4.6
const DEFAULT_STAGGER_SEC = 0.75
// Fraction of cycle when particle arrives at the target card (0..1)
const ARRIVAL_START_FRAC = 0.48
const ARRIVAL_END_FRAC = 0.74

export function LeadershipNetworkContainer({
  children,
  className = "",
  cycleDurationSec = DEFAULT_CYCLE_SEC,
  staggerSec = DEFAULT_STAGGER_SEC,
}: LeadershipNetworkContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [paths, setPaths] = useState<ConnectionPath[]>([])
  const [svgSize, setSvgSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  })
  const [ceoEmitterPos, setCeoEmitterPos] = useState<{ x: number; y: number } | null>(null)
  const [activeMemberIds, setActiveMemberIds] = useState<Record<string, boolean>>({})
  const [hoveredMemberId, setHoveredMemberId] = useState<string | null>(null)
  const [ceoHovered, setCeoHovered] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const rafMeasureRef = useRef<number | null>(null)

  // Detect prefers-reduced-motion
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  // Calculate SVG connection coordinates from real DOM elements
  const calculateConnections = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    const containerRect = container.getBoundingClientRect()
    if (containerRect.width === 0 || containerRect.height === 0) return

    const ceoNode = container.querySelector<HTMLElement>('[data-leadership-ceo-node="true"]')
    if (!ceoNode) {
      setPaths([])
      return
    }

    const ceoEmitter = container.querySelector<HTMLElement>('[data-leadership-ceo-emitter="true"]')
    const ceoRect = ceoNode.getBoundingClientRect()
    const emitterRect = ceoEmitter ? ceoEmitter.getBoundingClientRect() : null

    const allTeamNodes = Array.from(
      container.querySelectorAll<HTMLElement>("[data-leadership-team-node]")
    )

    // Filter to visible team cards within horizontal bounds of the container
    const visibleTeamNodes: HTMLElement[] = []
    const seenMemberIds = new Set<string>()

    for (const node of allTeamNodes) {
      const rect = node.getBoundingClientRect()
      if (rect.width < 20 || rect.height < 20) continue
      const centerX = rect.left + rect.width / 2
      // Check if card center is inside container horizontal viewport
      if (centerX < containerRect.left - 10 || centerX > containerRect.right + 10) {
        continue
      }
      const memberId = node.getAttribute("data-leadership-team-node") || ""
      // In duplicated marquee carousels, only connect to the primary visible instance of each member
      if (memberId && seenMemberIds.has(memberId)) {
        continue
      }
      if (memberId) {
        seenMemberIds.add(memberId)
      }
      visibleTeamNodes.push(node)
    }

    // Sort left-to-right, top-to-bottom for natural staggered wave
    visibleTeamNodes.sort((a, b) => {
      const rA = a.getBoundingClientRect()
      const rB = b.getBoundingClientRect()
      const rowDiff = Math.abs(rA.top - rB.top)
      if (rowDiff > 60) return rA.top - rB.top
      return rA.left - rB.left
    })

    const count = visibleTeamNodes.length
    const hasVisibleEmitter =
      emitterRect !== null && emitterRect.width > 0 && emitterRect.height > 0

    // Check if the majority of team cards sit below the CEO card or on the same row
    const firstTargetRect = visibleTeamNodes[0]?.getBoundingClientRect()
    const mostlyBelowCeo = firstTargetRect
      ? firstTargetRect.top >= ceoRect.bottom - 24
      : true

    const baseEmitterX = hasVisibleEmitter
      ? emitterRect.left - containerRect.left + emitterRect.width / 2
      : ceoRect.left - containerRect.left + ceoRect.width / 2
    const baseEmitterY = mostlyBelowCeo
      ? hasVisibleEmitter
        ? emitterRect.top - containerRect.top + emitterRect.height / 2
        : ceoRect.bottom - containerRect.top - 4
      : ceoRect.top - containerRect.top + 4

    setCeoEmitterPos({ x: baseEmitterX, y: baseEmitterY })
    setSvgSize({
      width: Math.ceil(containerRect.width),
      height: Math.ceil(containerRect.height),
    })

    const computedPaths: ConnectionPath[] = visibleTeamNodes.map((targetEl, index) => {
      const targetRect = targetEl.getBoundingClientRect()
      const memberId =
        targetEl.getAttribute("data-leadership-team-node") || `member-${index}`

      const targetCenterX = targetRect.left - containerRect.left + targetRect.width / 2
      const targetTopY = targetRect.top - containerRect.top + 3

      // Determine if target card is below the CEO card or on the same row
      const isBelowCeo = targetRect.top >= ceoRect.bottom - 24

      let startX = baseEmitterX
      let startY = baseEmitterY
      let endX = targetCenterX
      let endY = targetTopY
      let d = ""

      if (isBelowCeo) {
        // Spread departure points slightly around the CEO emitter
        const spreadOffset = count > 1 ? (index - (count - 1) / 2) * 9 : 0
        startX = baseEmitterX + spreadOffset
        startY = baseEmitterY

        const verticalSpan = Math.max(48, endY - startY)
        const cp1X = startX + (endX - startX) * 0.12
        const cp1Y = startY + verticalSpan * 0.46
        const cp2X = endX - (endX - startX) * 0.08
        const cp2Y = endY - verticalSpan * 0.44

        d = `M ${startX.toFixed(1)} ${startY.toFixed(1)} C ${cp1X.toFixed(1)} ${cp1Y.toFixed(1)}, ${cp2X.toFixed(1)} ${cp2Y.toFixed(1)}, ${endX.toFixed(1)} ${endY.toFixed(1)}`
      } else {
        // Target card is on the same horizontal row as the CEO card (e.g., 5-col desktop)
        const ceoTopCenterX = ceoRect.left - containerRect.left + ceoRect.width / 2
        const ceoTopY = ceoRect.top - containerRect.top + 4
        startX = ceoTopCenterX + (index + 1) * 3
        startY = ceoTopY
        endX = targetCenterX
        endY = targetTopY

        const archHeight = Math.min(32, 16 + index * 4)
        const peakY = Math.max(2, Math.min(startY, endY) - archHeight)
        const cp1X = startX + (endX - startX) * 0.28
        const cp1Y = peakY
        const cp2X = startX + (endX - startX) * 0.72
        const cp2Y = peakY

        d = `M ${startX.toFixed(1)} ${startY.toFixed(1)} C ${cp1X.toFixed(1)} ${cp1Y.toFixed(1)}, ${cp2X.toFixed(1)} ${cp2Y.toFixed(1)}, ${endX.toFixed(1)} ${endY.toFixed(1)}`
      }

      return {
        id: `leadership-path-${memberId}-${index}`,
        memberId,
        index,
        startX,
        startY,
        endX,
        endY,
        d,
        delaySec: Number((index * staggerSec).toFixed(2)),
        durationSec: cycleDurationSec,
      }
    })

    setPaths(computedPaths)
  }, [cycleDurationSec, staggerSec])

  const scheduleMeasure = useCallback(() => {
    if (rafMeasureRef.current !== null) {
      cancelAnimationFrame(rafMeasureRef.current)
    }
    rafMeasureRef.current = requestAnimationFrame(() => {
      calculateConnections()
      rafMeasureRef.current = null
    })
  }, [calculateConnections])

  // Observe layout, resize, scroll, and DOM mutations
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    calculateConnections()

    const resizeObserver = new ResizeObserver(() => {
      scheduleMeasure()
    })

    resizeObserver.observe(container)

    const ceoNode = container.querySelector('[data-leadership-ceo-node="true"]')
    if (ceoNode) resizeObserver.observe(ceoNode)

    const teamNodes = container.querySelectorAll("[data-leadership-team-node]")
    teamNodes.forEach((node) => resizeObserver.observe(node))

    // Observe view-mode toggles or DOM changes inside container
    const mutationObserver = new MutationObserver(() => {
      scheduleMeasure()
    })
    mutationObserver.observe(container, {
      childList: true,
      subtree: true,
    })

    // Listen to any scrollable carousel inside container
    const scrollContainers = container.querySelectorAll("[data-leadership-scroll-container]")
    scrollContainers.forEach((sc) => {
      sc.addEventListener("scroll", scheduleMeasure, { passive: true })
    })

    window.addEventListener("resize", scheduleMeasure, { passive: true })

    return () => {
      resizeObserver.disconnect()
      mutationObserver.disconnect()
      scrollContainers.forEach((sc) => {
        sc.removeEventListener("scroll", scheduleMeasure)
      })
      window.removeEventListener("resize", scheduleMeasure)
      if (rafMeasureRef.current !== null) {
        cancelAnimationFrame(rafMeasureRef.current)
      }
    }
  }, [calculateConnections, scheduleMeasure])

  // Attach hover listeners to CEO and Team cards for interactive illumination
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handlePointerOver = (e: Event) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      const teamCard = target.closest?.("[data-leadership-team-node]") as HTMLElement | null
      if (teamCard) {
        const id = teamCard.getAttribute("data-leadership-team-node")
        setHoveredMemberId(id)
        return
      }
      const ceoCard = target.closest?.('[data-leadership-ceo-node="true"]')
      if (ceoCard) {
        setCeoHovered(true)
      }
    }

    const handlePointerOut = (e: Event) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      const related = (e as PointerEvent).relatedTarget as HTMLElement | null
      if (related && container.contains(related)) {
        const nextTeam = related.closest?.("[data-leadership-team-node]") as HTMLElement | null
        const nextCeo = related.closest?.('[data-leadership-ceo-node="true"]')
        setHoveredMemberId(nextTeam ? nextTeam.getAttribute("data-leadership-team-node") : null)
        setCeoHovered(Boolean(nextCeo))
      } else {
        setHoveredMemberId(null)
        setCeoHovered(false)
      }
    }

    container.addEventListener("pointerover", handlePointerOver, { passive: true })
    container.addEventListener("pointerout", handlePointerOut, { passive: true })

    return () => {
      container.removeEventListener("pointerover", handlePointerOver)
      container.removeEventListener("pointerout", handlePointerOut)
    }
  }, [])

  // Synchronize Team Card activation state with arrival of energy particles
  useEffect(() => {
    const container = containerRef.current
    if (!container || prefersReducedMotion || paths.length === 0) {
      // Clear active attributes if reduced motion
      if (container) {
        container
          .querySelectorAll("[data-leadership-team-node]")
          .forEach((el) => el.removeAttribute("data-network-active"))
      }
      setActiveMemberIds({})
      return
    }

    const startTime = performance.now()
    const cycleMs = cycleDurationSec * 1000

    const intervalId = window.setInterval(() => {
      const elapsedSec = (performance.now() - startTime) / 1000
      const nextActive: Record<string, boolean> = {}

      for (const path of paths) {
        const localTime = elapsedSec - path.delaySec
        if (localTime < 0) continue
        const phase = (localTime % cycleDurationSec) / cycleDurationSec
        if (phase >= ARRIVAL_START_FRAC && phase <= ARRIVAL_END_FRAC) {
          nextActive[path.memberId] = true
        }
      }

      if (hoveredMemberId) {
        nextActive[hoveredMemberId] = true
      }
      if (ceoHovered) {
        for (const path of paths) {
          nextActive[path.memberId] = true
        }
      }

      setActiveMemberIds(nextActive)

      // Update DOM data attribute directly for smooth CSS illumination on cards
      const teamCards = container.querySelectorAll<HTMLElement>("[data-leadership-team-node]")
      teamCards.forEach((card) => {
        const mId = card.getAttribute("data-leadership-team-node") || ""
        if (nextActive[mId]) {
          if (card.getAttribute("data-network-active") !== "true") {
            card.setAttribute("data-network-active", "true")
          }
        } else {
          if (card.getAttribute("data-network-active") === "true") {
            card.removeAttribute("data-network-active")
          }
        }
      })
    }, Math.min(120, Math.round(cycleMs / 35)))

    return () => {
      window.clearInterval(intervalId)
    }
  }, [paths, cycleDurationSec, prefersReducedMotion, hoveredMemberId, ceoHovered])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* SVG Electric Knowledge Transmission Layer (strictly behind cards, pointer-events-none) */}
      {svgSize.width > 0 && svgSize.height > 0 && paths.length > 0 && (
        <svg
          width={svgSize.width}
          height={svgSize.height}
          viewBox={`0 0 ${svgSize.width} ${svgSize.height}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] overflow-visible select-none"
        >
          <defs>
            {/* Base line gradient: Electric Cyan -> Royal Blue -> Subtle Violet */}
            <linearGradient id="leadership-line-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.85" />
              <stop offset="55%" stopColor="#3b82f6" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.7" />
            </linearGradient>

            {/* Horizontal fallback gradient for same-row connections */}
            <linearGradient id="leadership-line-gradient-horiz" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.75" />
            </linearGradient>

            {/* Bright traveling energy pulse gradient */}
            <linearGradient id="leadership-pulse-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.95" />
              <stop offset="85%" stopColor="#c084fc" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#e0f2fe" stopOpacity="1" />
            </linearGradient>

            {/* Soft glow filter for particles and active nodes */}
            <filter id="leadership-glow-filter" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Central CEO Emitter Core Ring */}
          {ceoEmitterPos && (
            <g transform={`translate(${ceoEmitterPos.x}, ${ceoEmitterPos.y})`}>
              <circle
                r="9"
                fill="rgba(6, 182, 212, 0.16)"
                stroke="rgba(34, 211, 238, 0.45)"
                strokeWidth="1"
              />
              {!prefersReducedMotion && (
                <circle
                  r="6"
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="1.2"
                  opacity="0.65"
                >
                  <animate
                    attributeName="r"
                    values="5;16;5"
                    dur="3.2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.7;0;0.7"
                    dur="3.2s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
              <circle
                r="4"
                fill="#67e8f9"
                filter="url(#leadership-glow-filter)"
              />
            </g>
          )}

          {/* Connection Paths & Knowledge Particles */}
          {paths.map((path) => {
            const isActive = Boolean(
              activeMemberIds[path.memberId] ||
                hoveredMemberId === path.memberId ||
                ceoHovered
            )

            return (
              <g key={path.id}>
                {/* 1. Ambient Wide Soft Glow Backing */}
                <path
                  d={path.d}
                  stroke="#06b6d4"
                  strokeWidth={isActive ? 5 : 3}
                  strokeOpacity={isActive ? 0.24 : 0.1}
                  strokeLinecap="round"
                  className="transition-all duration-500"
                />

                {/* 2. Primary Crisp Circuit Conduit */}
                <path
                  id={path.id}
                  d={path.d}
                  stroke="url(#leadership-line-gradient)"
                  strokeWidth={isActive ? 2 : 1.35}
                  strokeOpacity={isActive ? 0.92 : 0.46}
                  strokeLinecap="round"
                  className="transition-all duration-500"
                />

                {/* 3. Subtle Tech Dashed Overlay */}
                <path
                  d={path.d}
                  stroke="#a855f7"
                  strokeWidth="1"
                  strokeDasharray="3 9"
                  strokeOpacity={isActive ? 0.45 : 0.2}
                  strokeLinecap="round"
                />

                {/* 4. Animated Energy Stream & Traveling Particles (when motion is allowed) */}
                {!prefersReducedMotion && (
                  <>
                    {/* Flowing Energy Segment along the Path */}
                    <path
                      d={path.d}
                      stroke="url(#leadership-pulse-gradient)"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      pathLength={1000}
                      strokeDasharray="135 1000"
                      strokeDashoffset={1135}
                      filter="url(#leadership-glow-filter)"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        values="1135;-135;-135"
                        keyTimes="0;0.55;1"
                        dur={`${path.durationSec}s`}
                        begin={`${path.delaySec}s`}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0;1;0.95;0;0"
                        keyTimes="0;0.08;0.5;0.6;1"
                        dur={`${path.durationSec}s`}
                        begin={`${path.delaySec}s`}
                        repeatCount="indefinite"
                      />
                    </path>

                    {/* Primary Cyan Knowledge Particle */}
                    <g filter="url(#leadership-glow-filter)">
                      <circle r="6" fill="rgba(34, 211, 238, 0.32)" />
                      <circle r="3" fill="#e0f2fe" />
                      <animateMotion
                        dur={`${path.durationSec}s`}
                        begin={`${path.delaySec}s`}
                        repeatCount="indefinite"
                        keyPoints="0;1;1"
                        keyTimes="0;0.52;1"
                        calcMode="spline"
                        keySplines="0.35 0 0.25 1; 0 0 1 1"
                      >
                        <mpath href={`#${path.id}`} />
                      </animateMotion>
                      <animate
                        attributeName="opacity"
                        values="0;1;1;0;0"
                        keyTimes="0;0.06;0.48;0.56;1"
                        dur={`${path.durationSec}s`}
                        begin={`${path.delaySec}s`}
                        repeatCount="indefinite"
                      />
                    </g>

                    {/* Secondary Trailing Purple/Electric Accent Spark */}
                    <g filter="url(#leadership-glow-filter)">
                      <circle r="4.5" fill="rgba(168, 85, 247, 0.28)" />
                      <circle r="2" fill="#e9d5ff" />
                      <animateMotion
                        dur={`${path.durationSec}s`}
                        begin={`${(path.delaySec + 0.18).toFixed(2)}s`}
                        repeatCount="indefinite"
                        keyPoints="0;1;1"
                        keyTimes="0;0.52;1"
                        calcMode="spline"
                        keySplines="0.35 0 0.25 1; 0 0 1 1"
                      >
                        <mpath href={`#${path.id}`} />
                      </animateMotion>
                      <animate
                        attributeName="opacity"
                        values="0;0.9;0.9;0;0"
                        keyTimes="0;0.06;0.48;0.56;1"
                        dur={`${path.durationSec}s`}
                        begin={`${(path.delaySec + 0.18).toFixed(2)}s`}
                        repeatCount="indefinite"
                      />
                    </g>
                  </>
                )}

                {/* 5. Target Card Receptor Node & Arrival Pulse */}
                <g transform={`translate(${path.endX}, ${path.endY})`}>
                  <circle
                    r={isActive ? 6 : 3.5}
                    fill={isActive ? "rgba(34, 211, 238, 0.35)" : "rgba(6, 182, 212, 0.18)"}
                    className="transition-all duration-300"
                  />
                  <circle
                    r={isActive ? 3.2 : 2.2}
                    fill={isActive ? "#67e8f9" : "#22d3ee"}
                    filter={isActive ? "url(#leadership-glow-filter)" : undefined}
                    className="transition-all duration-300"
                  />
                  {isActive && !prefersReducedMotion && (
                    <circle
                      r="4"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="1.2"
                      opacity="0.8"
                    >
                      <animate
                        attributeName="r"
                        values="3;14"
                        dur="0.9s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.85;0"
                        dur="0.9s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                </g>
              </g>
            )
          })}
        </svg>
      )}

      {/* Content Layer */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
