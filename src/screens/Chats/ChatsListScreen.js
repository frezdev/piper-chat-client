import { useEffect, useState, useCallback } from 'react'
import { View } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { IconButton, AddIcon } from 'native-base'
import { Chat } from '../../api'
import { useAuth } from '../../hooks'
import { LoadingScreen } from '../../components/Shared/LoadingScreen'
import { ChatsList } from '../../components/Chat/ChatsList'
import { size } from 'lodash'
import { screens } from '../../utils'
import { Variables } from '../../styles/variables.styles'

const chatController = new Chat()

export const ChatsListScreen = () => {
  const { accessToken } = useAuth()
  const [chats, setChats] = useState(null)
  const [chatsResult, setChatsResult] = useState(null)
  const [reload, setReload] = useState(false)
  const navigation = useNavigation()
  const variables = Variables()

  const onReload = () => setReload(prevState => !prevState)

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
          setChatsResult(response)
          setChats(response)
        } catch (error) {
          console.error({ error })
        }
      })()
    }, [reload])
  )

  if (!chatsResult) return <LoadingScreen />

  return (
    <View>
      <ChatsList
        chats={size(chats) === size(chatsResult) ? chats : chatsResult}
        onReload={onReload}
      />
    </View>
  )
}
