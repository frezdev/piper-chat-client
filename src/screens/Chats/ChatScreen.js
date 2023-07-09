import { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { ChatMessage, Chat } from '../../api'
import { useAuth } from '../../hooks'
import { HeaderChat } from '../../components/Navigation/HeaderChat'

const messageController = new ChatMessage()
const chatController = new Chat()

export function ChatScreen () {
  const { params } = useRoute()
  const { accessToken } = useAuth()

  useEffect(() => {
    (async () => {
      try {
        const chatActive = await chatController.getActiveChat()
        if (chatActive) {
          await messageController.updateReadMessages(accessToken, chatActive)
        }
      } catch (error) {
        console.error(error)
      }
    })()

    return async () => {
      await chatController.setActiveChat('')
    }
  }, [])
  return (
    <>
      <HeaderChat chatId={params?.chatId || null} />
      <View>
        <Text>ChatScreen</Text>
      </View>
    </>
  )
}
