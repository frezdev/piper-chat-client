import { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, Pressable } from 'react-native'
import { IconButton, DeleteIcon, Avatar } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { Chat } from '../../../api'
import { useAuth, useCurrentChat } from '../../../hooks'
import { ENV, screens } from '../../../utils'
import { AlertConfirm } from '../../Shared'
import { IconBack } from '../IconBack'
import { Styles } from './HeaderChat.styles'

const chatController = new Chat()

export function HeaderChat (props) {
  const { chatId } = props
  const [userChat, setUserChat] = useState()
  const [showDelete, setShowDelete] = useState(false)
  const { accessToken } = useAuth()
  const { currentChat } = useCurrentChat()

  const navigation = useNavigation()
  const styles = Styles()

  useEffect(() => {
    setUserChat(currentChat.userTwo)
  }, [])

  const openCloseDelete = () => setShowDelete(!showDelete)

  const deleteChat = async () => {
    try {
      await chatController.deleteChat(accessToken, chatId)
      openCloseDelete()
      navigation.goBack()
    } catch (error) {
      console.error(error)
    }
  }

  const goToUserProfile = () => {
    navigation.navigate(screens.global.userProfileScreen)
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.info}>
            <IconBack />

            {userChat && (
              <Pressable style={styles.info} onPress={goToUserProfile}>
                <Avatar
                  style={styles.avatar}
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
                      : userChat?.email.split('@').at(0)
                  }
                </Text>
              </Pressable>
            )}
          </View>
          <View>
            {chatId && (
              <IconButton
                icon={<DeleteIcon style={styles.deleteIcon} />}
                onPress={openCloseDelete}
                padding={2}
              />
            )}
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
          onConfirm={deleteChat}
          textConfirm='Eliminar'
        />
      }
    </>
  )
}
