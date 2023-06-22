import { useEffect, useState, useCallback } from 'react'
import { View, Text } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { IconButton, AddIcon } from 'native-base'
import { Chat } from '../../api'
import { useAuth } from '../../hooks'
import { screens } from '../../utils'
import { Variables } from '../../styles/variables.styles'

const chatController = new Chat()

export const ChatsListScreen = () => {
  const { accessToken } = useAuth()
  const [chats, setChats] = useState(null)
  const [chatsResult, setChatsResult] = useState(null)
  const navigation = useNavigation()
  const variables = Variables()

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          padding={2}
          borderRadius={50}
          onPress={
            () => navigation.navigate(screens.tab.chats.createChatScreem)
          }
          icon={<AddIcon style={{ width: 23, height: 23, color: variables.brandColor }} />}
        />
      )
    })
  }, [])

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await chatController.getAll(accessToken)
          // console.log(response)
          setChats(response)
        } catch (error) {
          console.error({ error })
        }
      })()
    }, [])
  )
  return (
    <View>
      <Text>ChatsListScreen</Text>
    </View>
  )
}
