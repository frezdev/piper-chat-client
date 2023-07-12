import { ScrollView } from 'react-native'
import { View } from 'native-base'
import { MessageImageItem, MessageTextItem } from './'
import { styles } from './MessagesList.styles'

export function MessagesList (props) {
  const { messages } = props
  console.log(messages.at(-3))
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {messages.map((message) => {
          if (message.type === 'TEXT') {
            return <MessageTextItem key={message._id} message={message}/>
          }
          if (message.type === 'IMAGE') {
            return <MessageImageItem key={message._id} message={message} />
          }
        })}
      </View>
    </ScrollView>
  )
}
