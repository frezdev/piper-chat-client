import { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { Avatar } from 'native-base'
import { useCurrentChat } from '../../../hooks'
import { ENV } from '../../../utils'
import { Styles } from './UserProfileScreen.styles'

export function UserProfileScreen () {
  const { currentChat } = useCurrentChat()
  const [user, setUser] = useState(null)
  const styles = Styles()

  useEffect(() => {
    setUser(currentChat.userTwo)
  }, [])

  return (
    <View style={styles.content}>
      <Avatar
        source={{ uri: user?.avatar && `${ENV.IMAGES_URL}/${user?.avatar}` }}
        style={styles.avatar}
        size='xl'
      >
        {user?.email?.substring(0, 2).toUpperCase()}
      </Avatar>
    </View>
  )
}
