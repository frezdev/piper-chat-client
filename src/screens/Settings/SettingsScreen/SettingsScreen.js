import { View, Text, SafeAreaView } from 'react-native'
import { useAuth } from '../../../hooks'
import { UserInfo, Options } from '../../../components/Settings'

export function SettingsScreen () {
  const { logout, user, accessToken } = useAuth()
  return (
    <SafeAreaView>
      <UserInfo user={user} />
      <Options {...{ logout, user, accessToken }} />
    </SafeAreaView>
  )
}
