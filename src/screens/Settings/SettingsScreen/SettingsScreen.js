import { View, Text, SafeAreaView } from 'react-native'
import { useAuth } from '../../../hooks'
import { UserInfo, Options } from '../../../components/Settings'

export function SettingsScreen () {
  const { logout, user } = useAuth()
  return (
    <SafeAreaView style={{ alignItems: 'center', height: '100%', overflow: 'scroll', position: 'relative' }}>
      <UserInfo user={user} />
      <Options />
      <View style={{ padding: 20 }}>
        <Text
          onPress={logout}
          style={{ color: 'red', fontSize: 20, padding: 15 }}>
            Cerrar sesión
        </Text>
      </View>
    </SafeAreaView>
  )
}
