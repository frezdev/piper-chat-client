import { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from 'native-base'
import { isEmpty } from 'lodash'
// import { DateTime } from 'luxon'
import { useAuth } from '../../../../hooks'
import { AlertConfirm } from '../../../Shared'
import { ChatMessage } from '../../../../api/chatMessage'
import { ENV, formatDate } from '../../../../utils'
import { Styles } from './ChatItem.styles'

const messageController = new ChatMessage()

export function ChatItem (props) {
  const styles = Styles()
  const { chat } = props
  const { member_one, member_two } = chat
  const { user, accessToken } = useAuth()
  const [lastMessage, setLastMessage] = useState(null)
  const [sender, setSender] = useState(null)
  const [totalUnreadMessages, setTotalUnreadMessages] = useState(0)
  const [showDelete, setShowDelete] = useState(false)

  const userChat = user.id !== member_one.id ? member_one : member_two

  useEffect(() => {
    (async () => {
      try {
        const totalUnread = await messageController.getUnredMessages(accessToken, chat._id)
        setTotalUnreadMessages(totalUnread)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [chat._id])

  useEffect(() => {
    (async () => {
      try {
        const message = await messageController.getLastMessage(accessToken, chat._id)

        message.user === user.id ? setSender(true) : setSender(false)
        if (!isEmpty(message)) setLastMessage(message)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [chat._id])

  const openChat = () => {
    console.log('Abrir chat ->', chat)
  }

  const openCloseDelete = () => setShowDelete(prevState => !prevState)

  const deleteChat = () => {
    console.log('Eliminar chat ->', chat._id)
  }
  return (
    <>
      <TouchableOpacity style={styles.item} onPress={openChat}>
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
        message={`Seguro que deseas elininar este chat con ${userChat.firstName || userChat.email}`}
      />
    </>
  )
}
