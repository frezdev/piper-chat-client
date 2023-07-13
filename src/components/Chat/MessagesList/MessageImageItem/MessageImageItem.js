import { View, Text, Image } from 'react-native'
import { useAuth } from '../../../../hooks'
import { ENV } from '../../../../utils'
import { Styles } from './MessageImageItem.styles'

export function MessageImageItem ({ message }) {
  const { user } = useAuth()
  const isMe = user.id === message.user.id
  const styles = Styles(isMe)
  return (
    <View style={styles.content}>
      <View style={styles.message}>
        <Image source={{ uri: `${ENV.IMAGES_URL}/${message.user.avatar}` }} style={{ width: 230, height: 300, borderRadius: 5 }} />
        {/* <Text style={styles.text} selectable>{`${ENV.IMAGES_URL}/${message.user.avatar}`}</Text> */}
      </View>
    </View>
  )
}
