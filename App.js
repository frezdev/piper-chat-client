import { NativeBaseProvider } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'
import { HandlerNavigation } from './src/navigations'
import { StatusBarStyle } from './src/components/StatusBar/StatusBarStyle'
import { AuthProvider, ThemeProvider, ChatProvider } from './src/Context'

export default function App () {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <AuthProvider>
          <ThemeProvider>
            <ChatProvider>
              <StatusBarStyle />
              <HandlerNavigation />
            </ChatProvider>
          </ThemeProvider>
        </AuthProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  )
}
