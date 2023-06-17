import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { screens } from '../../utils/screens'
import { IconBack } from '../../components/Navigation'
import { styles } from '../Styles.styles'
import {
  AuthStartScreen,
  RegisterScreen,
  LoginScreen
} from '../../screens/Auth'

const Stack = createNativeStackNavigator()

export function AuthNavigation () {
  return (
    <Stack.Navigator
      screenOptions={{
        ...styles.stackNavigationStyles,
        headerLeft: IconBack,
        headerTitleAlign: 'center'
      }}
    >
      <Stack.Screen
        name={screens.auth.authStartScreen}
        component={AuthStartScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={screens.auth.loginScreen}
        component={LoginScreen}
        options={{ title: 'Iniciar sesión' }}
      />

      <Stack.Screen
        name={screens.auth.registerScreen}
        component={RegisterScreen}
        options={{ title: 'Registro' }}
      />
    </Stack.Navigator>
  )
}
