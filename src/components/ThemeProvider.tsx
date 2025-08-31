// 'use client'
// import React, { createContext, useContext, useEffect, useState } from 'react'

// type Theme = 'dark' | 'light'

// type ThemeProviderProps = {
//   children: React.ReactNode
// }

// type ThemeProviderState = {
//   theme: Theme
//   setTheme: (theme: Theme) => void
// }

// const initialState: ThemeProviderState = {
//   theme: 'dark',
//   setTheme: () => null,
// }

// const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

// export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
//   const [theme, setTheme] = useState<Theme>('dark')

//   useEffect(() => {
//     const root = window.document.documentElement
//     root.classList.remove('light', 'dark')
//     root.classList.add(theme)
//   }, [theme])

//   const value = {
//     theme,
//     setTheme: (theme: Theme) => {
//       setTheme(theme)
//     },
//   }

//   return (
//     <ThemeProviderContext.Provider {...props} value={value}>
//       {children}
//     </ThemeProviderContext.Provider>
//   )
// }

// export const useTheme = () => {
//   const context = useContext(ThemeProviderContext)
//   if (context === undefined) {
//     throw new Error('useTheme must be used within a ThemeProvider')
//   }
//   return context
// }
'use client'
import React, { createContext, useContext, useEffect, useState, useMemo } from 'react'

// Define Theme types
export type Theme = 'dark' | 'light'

// Define context value type
interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

// Create context with undefined initial value for better type safety
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// ThemeProvider props type
interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  defaultTheme = 'dark',
  storageKey = 'theme'
}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [mounted, setMounted] = useState(false)

  // Handle hydration mismatch by mounting after client-side render
  useEffect(() => {
    setMounted(true)
    
    // Check for stored theme preference
    const storedTheme = localStorage.getItem(storageKey) as Theme | null
    if (storedTheme && (storedTheme === 'dark' || storedTheme === 'light')) {
      setTheme(storedTheme)
    } else {
      // Check system preference if no stored theme
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      setTheme(mediaQuery.matches ? 'dark' : 'light')
    }
  }, [storageKey])

  // Apply theme to document and store preference
  useEffect(() => {
    if (!mounted) return

    const root = window.document.documentElement
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark')
    
    // Add current theme class
    root.classList.add(theme)
    
    // Store theme preference
    localStorage.setItem(storageKey, theme)
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#111827' : '#ffffff')
    }
  }, [theme, mounted, storageKey])

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  // Enhanced setTheme with validation
  const setThemeWithValidation = (newTheme: Theme) => {
    if (newTheme === 'dark' || newTheme === 'light') {
      setTheme(newTheme)
    } else {
      console.warn(`Invalid theme: ${newTheme}. Using default theme instead.`)
      setTheme(defaultTheme)
    }
  }

  // Memoize context value to prevent unnecessary re-renders
  const value = useMemo(() => ({
    theme,
    setTheme: setThemeWithValidation,
    toggleTheme
  }), [theme, defaultTheme])

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <ThemeContext.Provider value={value}>
        {children}
      </ThemeContext.Provider>
    )
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook to use theme context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  
  return context
}

// Additional utility hook for theme-aware components
export const useThemeAware = () => {
  const { theme } = useTheme()
  
  const isDark = theme === 'dark'
  const isLight = theme === 'light'
  
  return {
    theme,
    isDark,
    isLight,
    classes: {
      bg: isDark ? 'bg-gray-900' : 'bg-white',
      text: isDark ? 'text-white' : 'text-gray-900',
      card: isDark ? 'bg-gray-800' : 'bg-gray-100',
      border: isDark ? 'border-gray-700' : 'border-gray-300'
    }
  }
}
