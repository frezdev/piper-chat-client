import { StatusBar } from 'expo-status-bar'
import { useColorTheme } from '../../hooks'

export function StatusBarStyle () {
  const { dark } = useColorTheme()
  return (
    <StatusBar style={dark ? 'light' : 'dark'} />
  )
}
