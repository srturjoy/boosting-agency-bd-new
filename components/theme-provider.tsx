'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  useTheme as useNextTheme,
  type ThemeProviderProps,
} from 'next-themes'

export const THEME_STORAGE_KEY = 'boosting-agency-theme'
export const THEME_MANUAL_PERIOD_KEY = 'boosting-agency-theme-manual-period'

/**
 * Calculates the current Bangladesh Standard Time (Asia/Dhaka, UTC+6) schedule:
 * - 5:00 PM (17:00) to 7:00 AM (06:59) BD Time => 'dark'
 * - 7:00 AM (07:00) to 5:00 PM (16:59) BD Time => 'light'
 */
export function getBangladeshSchedule(): {
  theme: 'dark' | 'light'
  periodKey: string
  bdHour: number
} {
  const nowUtcMs = Date.now()
  // Bangladesh Standard Time is strictly UTC+6 year-round
  const bdNow = new Date(nowUtcMs + 6 * 3600 * 1000)
  const bdHour = bdNow.getUTCHours()
  const isNight = bdHour >= 17 || bdHour < 7
  const theme: 'dark' | 'light' = isNight ? 'dark' : 'light'

  // Anchor night period (17:00 -> 06:59 next day) to the date when 17:00 started
  const anchorDate =
    bdHour < 7 ? new Date(nowUtcMs + (6 - 7) * 3600 * 1000) : bdNow
  const year = anchorDate.getUTCFullYear()
  const month = String(anchorDate.getUTCMonth() + 1).padStart(2, '0')
  const day = String(anchorDate.getUTCDate()).padStart(2, '0')
  const periodKey = `${year}-${month}-${day}-${isNight ? 'night' : 'day'}`

  return { theme, periodKey, bdHour }
}

function applyDomTheme(targetTheme: 'dark' | 'light') {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  if (targetTheme === 'light') {
    root.classList.remove('dark')
    root.classList.add('light')
    root.style.colorScheme = 'light'
  } else {
    root.classList.remove('light')
    root.classList.add('dark')
    root.style.colorScheme = 'dark'
  }
}

function BangladeshTimeThemeSync() {
  const { setTheme, theme, resolvedTheme } = useNextTheme()

  React.useEffect(() => {
    const syncWithBangladeshTime = () => {
      try {
        const { theme: scheduledTheme, periodKey } = getBangladeshSchedule()
        const manualPeriod = localStorage.getItem(THEME_MANUAL_PERIOD_KEY)

        // If the user has not manually overridden the theme in the current BD period,
        // enforce the Bangladesh time schedule (5 PM - 7 AM Dark, 7 AM - 5 PM Light).
        if (manualPeriod !== periodKey) {
          localStorage.setItem(THEME_STORAGE_KEY, scheduledTheme)
          applyDomTheme(scheduledTheme)
          if ((resolvedTheme || theme) !== scheduledTheme) {
            setTheme(scheduledTheme)
          }
        }
      } catch {
        // Fallback silently if storage is restricted
      }
    }

    syncWithBangladeshTime()
    const intervalId = window.setInterval(syncWithBangladeshTime, 60_000)
    return () => window.clearInterval(intervalId)
  }, [setTheme, theme, resolvedTheme])

  return null
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const initialTheme = React.useMemo(() => getBangladeshSchedule().theme, [])

  return (
    <NextThemesProvider
      {...props}
      defaultTheme={initialTheme}
      storageKey={THEME_STORAGE_KEY}
    >
      <BangladeshTimeThemeSync />
      {children}
    </NextThemesProvider>
  )
}

export function useTheme() {
  try {
    const nextTheme = useNextTheme()
    const setManualTheme = React.useCallback(
      (newTheme: 'dark' | 'light') => {
        try {
          const { periodKey } = getBangladeshSchedule()
          localStorage.setItem(THEME_MANUAL_PERIOD_KEY, periodKey)
          localStorage.setItem(THEME_STORAGE_KEY, newTheme)
          applyDomTheme(newTheme)
        } catch {
          // Ignore storage error
        }
        nextTheme.setTheme(newTheme)
      },
      [nextTheme]
    )

    return {
      ...nextTheme,
      setManualTheme,
    }
  } catch {
    const fallback = getBangladeshSchedule().theme
    return {
      theme: fallback,
      setTheme: () => {},
      setManualTheme: () => {},
      resolvedTheme: fallback,
      themes: ['light', 'dark'],
      systemTheme: fallback,
    }
  }
}
