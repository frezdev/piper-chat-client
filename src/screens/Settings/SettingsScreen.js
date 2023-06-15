import { View, Text } from 'react-native'
import { useAuth } from '../../hooks'

export function SettingsScreen () {
  const { logout } = useAuth()
  return (
    <View>
      <Text>SettingsScreen</Text>

      <View style={{ padding: 45, bottom: 0, position: 'relative' }}>
        <Text
          onPress={logout}
          style={{ color: 'red', fontSize: 20, textAlign: 'center', padding: 15 }}>
            Cerrar sesión
        </Text>
      </View>
    </View>
  )
}
