import { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, Pressable } from 'react-native'
import { IconButton, DeleteIcon, Avatar } from 'native-base'
import { Chat } from '../../../api'
import { useAuth } from '../../../hooks'
import { ENV } from '../../../utils'
import { AlertConfirm } from '../../Shared'
import { IconBack } from '../IconBack'
import { Styles } from './HeaderChat.styles'

const chatController = new Chat()

export function HeaderChat (props) {
  const { chatId } = props
  const [userChat, setUserChat] = useState()
  const [showDelete, setShowDelete] = useState(false)
  const { accessToken, user } = useAuth()
  const styles = Styles()

  useEffect(() => {
    (async () => {
      const response = await chatController.obtain(accessToken, chatId)
      const otherUser =
        user?.id !== response?.member_one?.id
          ? response?.member_one
          : response?.member_two

      setUserChat(otherUser)
    })()
  }, [chatId])

  const openCloseDelete = () => setShowDelete(!showDelete)

  const deleteChat = async () => {
    try {

    } catch (error) {
      console, error(error)
    }
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.info}>
            <IconBack />

            {userChat && (
              <Pressable style={styles.info} onPress={() => console.log('go to info')}>
                <Avatar
                  style={styles.avatar}
                  bg={'lightBlue.600'}
                  marginRight={7}
                  marginX={2}
                  size='md'
                  source={{ uri: userChat?.avatar && `${ENV.IMAGES_URL}/${userChat.avatar}` }}
                >
                  {userChat?.email.substring(0, 2).toUpperCase()}
                </Avatar>
                <Text style={styles.identity} numberOfLines={1}>
                  {
                    (userChat?.firstName || userChat?.lastName)
                      ? `${userChat?.firstName} ${userChat?.lastName}`
                      : userChat?.email
                  }
                </Text>
              </Pressable>
            )}
          </View>
          <View>
            <IconButton
              icon={<DeleteIcon style={styles.deleteIcon} />}
              onPress={openCloseDelete}
              padding={2}
            />
          </View>
        </View>
      </SafeAreaView>
      {
        <AlertConfirm
          show={showDelete}
          title='Eliminar chat'
          onClose={openCloseDelete}
          message='¿Estas seguro?'
          isDanger
          onConfirm={() => {}}
          textConfirm='Eliminar'
        />
      }
    </>
  )
}
