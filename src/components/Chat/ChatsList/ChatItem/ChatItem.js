import { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from 'native-base'
import { isEmpty } from 'lodash'
import { useAuth } from '../../../../hooks'
import { AlertConfirm } from '../../../Shared'
import { ChatMessage, Chat } from '../../../../api'
import { ENV, formatDate, socket, screens } from '../../../../utils'
import { Styles } from './ChatItem.styles'

const messageController = new ChatMessage()
const chatController = new Chat()

export function ChatItem (props) {
  const styles = Styles()
  const { chat, onReload } = props
  const { member_one, member_two } = chat
  const { user, accessToken } = useAuth()
  const [lastMessage, setLastMessage] = useState(null)
  const [sender, setSender] = useState(null)
  const [totalUnreadMessages, setTotalUnreadMessages] = useState(0)
  const [showDelete, setShowDelete] = useState(false)
  const [isRead, setIsRead] = useState(false)
  const { navigate } = useNavigation()

  const userChat = user.id !== member_one.id ? member_one : member_two

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const totalUnread = await messageController.getUnredMessages(accessToken, chat._id)
  //       await messageController.setTotalUnreadMessage(chat._id, totalUnread)
  //       setTotalUnreadMessages(totalUnread)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   })()
  // }, [chat._id])

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const totalUnread = await messageController.getTotalUnreadMessages(chat._id)
  //       setTotalUnreadMessages(totalUnread + 1)
  //       await messageController.setTotalUnreadMessage(chat._id, totalUnread + 1)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   })()
  // }, [lastMessage])

  useEffect(() => {
    (async () => {
      try {
        const totalUnread = await messageController.getUnredMessages(accessToken, chat._id)
        setTotalUnreadMessages(totalUnread)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [lastMessage])

  useEffect(() => {
    (async () => {
      try {
        const message = await messageController.getLastMessage(accessToken, chat._id)

        setSender(message.user === user.id)

        if (!isEmpty(message)) setLastMessage(message)

        setIsRead(message?.read)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [chat._id])

  const openChat = async () => {
    try {
      navigate(screens.global.chatScreen)
      await messageController.updateReadMessages(accessToken, chat._id)
      await messageController.setTotalUnreadMessage(chat._id, 0)
      setTotalUnreadMessages(0)

      console.log('Abrir chat ->', chat._id)
    } catch (error) {
      console.error(error)
    }
  }

  const openCloseDelete = () => setShowDelete(prevState => !prevState)

  const deleteChat = async () => {
    try {
      await chatController.deleteChat(accessToken, chat._id)
      openCloseDelete()
      onReload()
    } catch (error) {
      console.error({ error })
    }
  }
  console.log(user.firstName, accessToken)
  useEffect(() => {
    socket?.emit('subscribe', `${chat._id}_notify`)
    socket?.on('message_notify', newMessage)
    socket?.emit('subscribe', `${chat._id}_read_notify`)
    socket?.on('read_notify', ({ read }) => {
      setIsRead(read)
      setTotalUnreadMessages(0)
    })
  }, [])

  const newMessage = async (newMessage) => {
    setSender(newMessage?.user?.id === user?.id)
    setLastMessage(newMessage)
    setIsRead(newMessage?.read)
  }

  return (
    <>
      <TouchableOpacity style={styles.item} onPress={openChat} onLongPress={openCloseDelete}>
        <View style={{ paddingVertical: 7 }}>
          <Avatar
            style={styles.avatar}
            bg={'lightBlue.600'}
            marginRight={4}
            marginX={2}
            size='lg'
            source={{ uri: userChat?.avatar && `${ENV.IMAGES_URL}/${userChat.avatar}` }}
            // source={{ uri: user.avatar && `${ENV.IMAGES_URL}/${user.avatar}` }}
          >
            {userChat?.email.substring(0, 2).toUpperCase()}
          </Avatar>
        </View>
        <View style={styles.infoContent}>
          <View style={styles.info}>
            <Text style={styles.identity} numberOfLines={1}>
              {
                (userChat?.firstName || userChat?.lastName)
                  ? `${userChat?.firstName} ${userChat?.lastName}`
                  : userChat?.email
              }
            </Text>
            <Text style={[styles.message, (totalUnreadMessages > 0 && !sender) && styles.unread]} numberOfLines={2}>
              {sender && 'Tú:'} {lastMessage?.message || ''}
            </Text>
          </View>
          <View style={styles.details}>
            {lastMessage !== null && (
              <Text style={[styles.time, (totalUnreadMessages === 0 || sender) && styles.noNewMessages]}>
                {formatDate(lastMessage?.createdAt)}
              </Text>
            )}
            {(totalUnreadMessages > 0 && !sender) && (
              <View style={[styles.totalUnreadMessagesContainer]}>
                <Text style={styles.totalUnreadMessages}>
                  {totalUnreadMessages < 99 ? totalUnreadMessages : '99'}
                </Text>
              </View>
            )}
            {(sender && isRead) && (
              <Text style={[styles.readInfo]}>
                visto
              </Text>
            )}
          </View>
        </View>
      </TouchableOpacity>

      <AlertConfirm
        show={showDelete}
        onClose={openCloseDelete}
        textConfirm='Eliminar'
        onConfirm={deleteChat}
        title='Eliminar chat'
        isDanger={true}
        message={`¿Seguro que deseas elininar este chat con ${userChat.firstName || userChat.email}?`}
      />
    </>
  )
}
