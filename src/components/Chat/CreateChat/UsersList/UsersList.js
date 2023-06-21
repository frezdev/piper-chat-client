import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { Avatar } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { map } from 'lodash'
import { ENV } from '../../../../utils'
import { Styles } from './UsersList.styles'

export function UsersList (props) {
  const { users } = props
  const styles = Styles()

  const createChat = (user) => {
    console.log(user)
  }
  return (
    <ScrollView style={styles.content}>
      <View style={{ marginBottom: 40 }}>
        {map(users, (user) => (
          <TouchableOpacity
            key={user.id}
            style={styles.item}
            onPress={() => createChat(user)}
          >

            <View style={{ paddingVertical: 7 }}>
              <Avatar
                bg={'lightBlue.600'}
                marginRight={4}
                marginX={2}
                size='lg'
                source={{ uri: user.avatar && `${ENV.IMAGES_URL}/${user.avatar}` }}
              >
                {user.email.substring(0, 2).toUpperCase()}
              </Avatar>
            </View>

            <View style={styles.info}>
              <Text style={styles.name}>
                {
                  (user.firstName || user.lastName)
                    ? `${user?.firstName} ${user?.lastName}`
                    : user.email
                }
              </Text>
              <Text style={styles.email}>
                {user.email}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}
