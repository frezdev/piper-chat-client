import { useContext } from 'react'
import { ThemeContext } from '../Context'

export const useColorTheme = () => useContext(ThemeContext)
