import { View, Text } from 'react-native'
import { useAuth } from '../../../../hooks'
import { Styles } from './MessageImageItem.styles'

export function MessageImageItem ({ message }) {
  const { user } = useAuth()
  const isMe = user.id === message.user.id
  const styles = Styles(isMe)
  return (
    <View style={styles.content}>
      <View style={styles.message}>
        <Text style={styles.text}>{message.message}</Text>
      </View>
    </View>
  )
}
