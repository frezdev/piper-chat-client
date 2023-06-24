import { StyleSheet } from 'react-native'
import { Variables } from '../../../styles/variables.styles'

export function Styles () {
  const variables = Variables()

  return StyleSheet.create({
    content: {
      padding: 10,
      paddingBottom: 100
    },
    noChats: {
      color: variables.textColorOpacity,
      textAlign: 'center',
      marginTop: 50,
      fontSize: 16,
      marginHorizontal: 40
    }
  })
}
