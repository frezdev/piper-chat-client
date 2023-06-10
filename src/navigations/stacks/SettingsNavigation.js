import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SettingsScreen, UpdateUserInfo } from '../../screens/Settings'
import { screens } from '../../utils/screens'
import { styles } from '../Styles.styles'

const Stack = createNativeStackNavigator()

export function SettingsNavigation () {
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
          presentation: 'modal'
        }}
      />
    </Stack.Navigator>
  )
}
