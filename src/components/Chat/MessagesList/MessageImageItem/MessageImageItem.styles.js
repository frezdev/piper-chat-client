import { StyleSheet } from 'react-native'
import { Variables } from '../../../../styles/variables.styles'

export function Styles (isMe) {
  const variables = Variables()

  return StyleSheet.create({
    content: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: isMe ? 'flex-end' : 'flex-start',
      marginHorizontal: 10,
      marginVertical: 5
    },
    message: {
      maxWidth: '80%',
      minWidth: 180,
      backgroundColor: isMe ? variables.messageBg : variables.borderColor,
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 10
    },
    text: {
      fontSize: 17,
      color: variables.textColorNormal
    }
  })
}
