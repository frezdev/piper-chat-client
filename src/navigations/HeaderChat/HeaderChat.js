import { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, Pressable } from 'react-native'
import { IconButton, ChevronLeftIcon, DeleteIcon, Avatar } from 'native-base'
import { Chat } from '../../api'
import { useAuth } from '../../hooks'
import { IconBack } from '../../components/Navigation/IconBack'
import { Styles } from './HeaderChat.styles'

const chatController = new Chat()

export function HeaderChat (props) {
  const { chatId } = props
  const [userChat, setUserChamt] = useState()
  const { accessToken } = useAuth()
  const styles = Styles()

  useEffect(() => {
    (async () => {
      const response = await chatController.obtain(accessToken, chatId)
      const otherUser = user._id !== response?.member_one?.id ? response?.member_one : response?.member_two
    })()
  }, [chatId])

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.info}>
            <IconBack />
          </View>
          <View>
            <IconButton icon={<DeleteIcon style={styles.deleteIcon} />} padding={2} />
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}
