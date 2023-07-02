import { View, Text, ScrollView } from 'react-native'
import { map, size } from 'lodash'
import { ChatItem } from './ChatItem'
import { Styles } from './ChatsList.styles'

export function ChatsList (props) {
  const { chats, onReload, upTopChat } = props
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
          <ChatItem
            chat={chat}
            key={chat._id}
            onReload={onReload}
            upTopChat={upTopChat}
          />
        ))}
      </View>
    </ScrollView>
  )
}
