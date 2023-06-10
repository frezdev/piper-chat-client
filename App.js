import { NativeBaseProvider } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'
import { HandlerNavigation } from './src/navigations'
import { StatusBar } from 'expo-status-bar'
import { AuthProvider } from './src/Context/AuthContext'
import { dark } from './src/Context/colorTheme'

export default function App () {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StatusBar style={dark ? 'light' : 'dark'} />
        <AuthProvider>
          <HandlerNavigation />
        </AuthProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  )
}
