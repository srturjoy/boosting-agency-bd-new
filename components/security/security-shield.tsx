"use client"

import { useEffect } from "react"

/**
 * Runtime client-side security shield:
 * 1. Displays a Self-XSS warning in DevTools console to prevent social engineering attacks.
 * 2. Intercepts clicks on any links with dangerous protocols (javascript:, vbscript:, data:text/html).
 * 3. Ensures all target="_blank" links enforce rel="noopener noreferrer" to block reverse tabnabbing.
 * 4. Blocks malicious drag-and-drop script/URI injection onto the document.
 */
export function SecurityShield() {
  useEffect(() => {
    if (typeof window === "undefined") return

    // 1. Self-XSS warning in browser console
    try {
      const warningTitle = "STOP! Security Warning — Boosting Agency BD"
      const warningBody =
        "This browser feature is intended for developers. If someone told you to copy-paste something here to enable a feature or 'hack' an account, it is a scam and will give them access to your session."
      console.log(
        `%c${warningTitle}\n%c${warningBody}`,
        "color: #ef4444; font-size: 20px; font-weight: 800;",
        "color: #94a3b8; font-size: 13px;"
      )
    } catch {
      // Ignore console styling errors
    }

    // 2. Global click guard against dangerous protocols & reverse tabnabbing
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      const anchor = target.closest?.("a") as HTMLAnchorElement | null
      if (!anchor) return

      const rawHref = (anchor.getAttribute("href") || "").trim().toLowerCase()
      if (
        rawHref.startsWith("javascript:") ||
        rawHref.startsWith("vbscript:") ||
        rawHref.startsWith("data:text/html")
      ) {
        e.preventDefault()
        e.stopPropagation()
        return
      }

      if (anchor.target === "_blank") {
        const currentRel = anchor.getAttribute("rel") || ""
        if (!currentRel.includes("noopener") || !currentRel.includes("noreferrer")) {
          anchor.setAttribute("rel", "noopener noreferrer")
        }
      }
    }

    // 3. Prevent dropping javascript: or data: URIs into the window
    const handleDrop = (e: DragEvent) => {
      const uri = e.dataTransfer?.getData("text/uri-list") || e.dataTransfer?.getData("text/plain") || ""
      const lower = uri.trim().toLowerCase()
      if (
        lower.startsWith("javascript:") ||
        lower.startsWith("vbscript:") ||
        lower.startsWith("data:text/html")
      ) {
        e.preventDefault()
        e.stopPropagation()
      }
    }

    document.addEventListener("click", handleGlobalClick, true)
    window.addEventListener("drop", handleDrop, true)

    return () => {
      document.removeEventListener("click", handleGlobalClick, true)
      window.removeEventListener("drop", handleDrop, true)
    }
  }, [])

  return null
}
