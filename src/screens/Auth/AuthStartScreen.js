import { View, Text } from 'react-native'
import { useAuth } from '../../hooks'

export function AuthStartScreen () {
  const auth = useAuth()

  return (
    <View>
      <Text style={{ color: '#fff' }}>AuthStartScreen</Text>
    </View>
  )
}
