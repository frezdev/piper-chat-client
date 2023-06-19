import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SettingsScreen, UpdateUserInfo } from '../../screens/Settings'
import { screens } from '../../utils/screens'
import { Styles } from '../Styles.styles'
import { IconBack } from '../../components/Navigation'

const Stack = createNativeStackNavigator()

export function SettingsNavigation () {
  const styles = Styles()
  return (
    <Stack.Navigator
      screenOptions={{
        ...styles.stackNavigationStyles
      }}
    >
      <Stack.Screen
        name={screens.tab.settings.settingsScreen}
        component={SettingsScreen}
        options={{ title: 'Configuración' }}
      />

      <Stack.Screen
        name={screens.tab.settings.updateUserInfoScreen}
        component={UpdateUserInfo}
        options={{
          title: 'Edita el perfil',
          presentation: 'modal',
          headerLeft: IconBack
        }}
      />
    </Stack.Navigator>
  )
}
