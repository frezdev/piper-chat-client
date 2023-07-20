import { ScrollView } from 'react-native'
import { View } from 'native-base'
import { MessageImageItem, MessageTextItem } from './'
import { styles } from './MessagesList.styles'

export function MessagesList (props) {
  const { messages } = props
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {messages.map((message, index) => {
          const nextMessageIsMy = message.user.id === messages[index + 1]?.user?.id
          if (message.type === 'TEXT') {
            return <MessageTextItem key={message._id} message={message} nextIsMy={nextMessageIsMy}/>
          }
          if (message.type === 'IMAGE') {
            return <MessageImageItem key={message._id} message={message} nextIsMy={nextMessageIsMy}/>
          }
        })}
      </View>
    </ScrollView>
  )
}
