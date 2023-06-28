import { View, Text, ScrollView } from 'react-native'
import { map, size } from 'lodash'
import { ChatItem } from './ChatItem'
import { Styles } from './ChatsList.styles'

export function ChatsList (props) {
  const { chats, onReload } = props
  const styles = Styles()

  return (
    <ScrollView alwaysBounceVertical={false}>
      <View style={styles.content}>
        {size(chats) === 0
          ? (
              <Text style={styles.noChats}>
                No tienes ningun chat, dale al (+) y empieza una nueva conversacion
              </Text>
            )
          : null
        }
        {map(chats, (chat) => (
          <ChatItem key={chat._id} chat={chat} onReload={onReload} />
        ))}
      </View>
    </ScrollView>
  )
}
