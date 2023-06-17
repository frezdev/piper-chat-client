import { useState, useEffect, createContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ENV } from '../utils/constants'

export const ThemeContext = createContext()

export function ThemeProvider ({ children }) {
  // const [theme, setTheme] = useState('light')
  const [dark, setDark] = useState(false)

  useEffect(() => {
    (async () => {
      const colorTheme = await AsyncStorage.getItem(ENV.STORAGE.COLOR_THEME)
      if (!colorTheme) {
        setDark(false)
        return await AsyncStorage.setItem(ENV.STORAGE.COLOR_THEME, 'light')
      }
      setDark(isDark(colorTheme))
    })()
  }, [])

  const updateTheme = async () => {
    setDark(!dark)
    if (!dark) {
      setDark(true)
      await AsyncStorage.setItem(ENV.STORAGE.COLOR_THEME, 'dark')
    } else {
      setDark(false)
      await AsyncStorage.setItem(ENV.STORAGE.COLOR_THEME, 'light')
    }
  }

  const isDark = (colorTheme) => {
    return (colorTheme === 'dark')
  }

  const value = {
    dark,
    updateTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
