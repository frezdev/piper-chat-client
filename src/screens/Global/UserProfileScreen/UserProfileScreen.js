import { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { User } from '../../../api'
import { Styles } from './UserProfileScreen.styles'

const userController = new User()

export function UserProfileScreen () {
  const [user, setUser] = useState(null)
  const styles = Styles()
  return (
    <View>
      <Text>UserProfileScreen</Text>
    </View>
  )
}
