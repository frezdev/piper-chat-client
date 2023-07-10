import { View, Text } from 'react-native'
import { Avatar } from 'native-base'
import { ENV } from '../../../utils'
import { Styles } from './UserInfo.styles'

export function UserInfo (props) {
  const styles = Styles()
  const { user } = props
  return (
    <View style={styles.content}>
      <Avatar
        size='2xl'
        style={styles.avatar}
        source={{ uri: user?.avatar && `${ENV.IMAGES_URL}/${user?.avatar}` }}
      >
        {user?.email?.substring(0, 2).toUpperCase()}
      </Avatar>

      <Text style={styles.identity}>
        {
          user?.firstName || user?.lastName
            ? `${user?.firstName} ${user?.lastName}`
            : `${user?.email.split('@').at(0)}`
        }
      </Text>
      <Text style={styles.email}>{user?.email}</Text>
    </View>
  )
}
