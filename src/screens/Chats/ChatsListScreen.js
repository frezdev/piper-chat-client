import { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { IconButton, AddIcon } from 'native-base'
import { screens } from '../../utils'
import { Variables } from '../../styles/variables.styles'

export const ChatsListScreen = () => {
  const variables = Variables()
  const navigation = useNavigation()

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
  return (
    <View>
      <Text>ChatsListScreen</Text>
    </View>
  )
}
