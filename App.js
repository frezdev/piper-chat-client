import { NativeBaseProvider } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'
import { HandlerNavigation } from './src/navigations'
import { StatusBarStyle } from './src/components/StatusBar/StatusBarStyle'
import { AuthProvider, ThemeProvider } from './src/Context'

export default function App () {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <AuthProvider>
          <ThemeProvider>
            <StatusBarStyle />
            <HandlerNavigation />
          </ThemeProvider>
        </AuthProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  )
}
