import { View } from 'react-native'
import { useCurrentChat } from '../../../hooks'
import { Styles } from './UserProfileScreen.styles'
import { UserInfo } from '../../../components/Settings/UserInfo/UserInfo'

export function UserProfileScreen () {
  const { currentChat } = useCurrentChat()
  const styles = Styles()

  return (
    <View style={styles.content}>
      <UserInfo user={currentChat.userTwo} />
    </View>
  )
}
