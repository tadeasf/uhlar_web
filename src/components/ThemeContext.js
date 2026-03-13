import React, { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isLight, setIsLight] = useState(false)

  // Načti volbu z localStorage při prvním renderu (pouze client-side)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("uhlar-theme")
      if (saved === "light") setIsLight(true)
    }
  }, [])

  // Aplikuj třídu na <body> a ulož do localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.classList.toggle("light", isLight)
      localStorage.setItem("uhlar-theme", isLight ? "light" : "dark")
    }
  }, [isLight])

  const toggleTheme = () => setIsLight(v => !v)

  return (
    <ThemeContext.Provider value={{ isLight, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}

export default ThemeContext
