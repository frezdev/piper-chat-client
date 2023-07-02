import { useEffect } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { ChatMessage, Chat } from '../../api'
import { useAuth } from '../../hooks'

const messageController = new ChatMessage()
const chatController = new Chat()

export function ChatScreen () {
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
    <SafeAreaView>
      <Text>ChatScreen</Text>
    </SafeAreaView>
  )
}
