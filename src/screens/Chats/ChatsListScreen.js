import { useEffect, useState, useCallback } from 'react'
import { View } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { IconButton, AddIcon } from 'native-base'
import { Chat } from '../../api'
import { useAuth } from '../../hooks'
import { LoadingScreen } from '../../components/Shared/LoadingScreen'
import { ChatsList, Search } from '../../components/Chat'
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
          const result = response.sort((a, b) => {
            return (
              new Date(b?.last_message_date) - new Date(a?.last_message_date)
            )
          })
          setChatsResult(result)
          setChats(result)
        } catch (error) {
          console.error({ error })
        }
      })()
    }, [reload])
  )

  const upTopChat = (chatId) => {
    const data = [...chatsResult]
    const fromIndex = data?.map(chat => chat._id).indexOf(chatId)
    const toIndex = 0

    const element = data?.splice(fromIndex, 1)[0]

    data?.splice(toIndex, 0, element)
    setChats([...data])
  }

  if (!chatsResult) return <LoadingScreen />

  return (
    <View>
      {size(chats) > 0 && <Search data={chats} setData={setChatsResult} clear={false} />}
      <ChatsList
        chats={size(chats) === size(chatsResult) ? chats : chatsResult}
        onReload={onReload}
        upTopChat={upTopChat}
      />
    </View>
  )
}
