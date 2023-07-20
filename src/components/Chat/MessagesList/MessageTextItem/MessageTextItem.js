import { View, Text } from 'react-native'
import { useAuth } from '../../../../hooks'
import { Styles } from './MessageTextItem.styles'

export function MessageTextItem ({ message, nextIsMy }) {
  const { user } = useAuth()
  const isMe = user.id === message.user.id
  const styles = Styles(isMe, nextIsMy)
  return (
    <View style={styles.content}>
      <View style={styles.message}>
        <Text style={styles.text}>{message.message}</Text>
      </View>
    </View>
  )
}
