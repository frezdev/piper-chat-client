import { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { View } from 'native-base'
import { useRoute } from '@react-navigation/native'
import { ChatMessage, Chat } from '../../api'
import { useAuth } from '../../hooks'
import { HeaderChat } from '../../components/Navigation'
import { LoadingScreen } from '../../components/Shared'
import { MessagesList } from '../../components/Chat'

const messageController = new ChatMessage()
const chatController = new Chat()

export function ChatScreen () {
  const { params } = useRoute()
  const { accessToken } = useAuth()

  const [chatMessages, setChatMessages] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        if (params?.chatId) {
          const { messages } = await messageController.getAllMessage(accessToken, params?.chatId)
          return setChatMessages(messages)
        }
        setChatMessages([])
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  useEffect(() => {
    return async () => {
      try {
        const chatActive = await chatController.getActiveChat()
        if (chatActive) {
          await messageController.updateReadMessages(accessToken, chatActive)
          await chatController.setActiveChat('')
        }
      } catch (error) {
        console.error(error)
      }
    }
  }, [])

  const conditionalRender = () => {
    if (!params?.chatId) return <Text>Se el primero en enviar un mensaje</Text>
    if (chatMessages?.length < 1) return <Text>Aún no hay mensajes</Text>
    if (chatMessages === null) return <LoadingScreen />

    return null
  }

  return (
    <>
      <HeaderChat chatId={params?.chatId || null} />
      {conditionalRender()}

      {chatMessages?.length > 0 && (
          <View flex>
            <MessagesList messages={chatMessages} />
          </View>
      )}
    </>
  )
}
