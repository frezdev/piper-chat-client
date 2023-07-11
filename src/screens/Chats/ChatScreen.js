import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { ChatMessage, Chat } from '../../api'
import { useAuth } from '../../hooks'
import { HeaderChat } from '../../components/Navigation/HeaderChat'
import { LoadingScreen } from '../../components/Shared'

const messageController = new ChatMessage()
const chatController = new Chat()

export function ChatScreen () {
  const { params } = useRoute()
  const { accessToken } = useAuth()

  const [messages, setMessages] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const response = await messageController.getAllMessage(accessToken, params?.chatId)
        setMessages(response)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

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
      {!messages
        ? <LoadingScreen />
        : (
            <View>
              <Text>ChatScreen</Text>
            </View>
          )
      }
    </>
  )
}
