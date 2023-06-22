import { StyleSheet } from 'react-native'
import { Variables } from '../../../styles/variables.styles'

export function Styles () {
  const variables = Variables()

  return StyleSheet.create({
    content: {
      paddingVertical: 10,
      paddingHorizontal: 15
    },
    input: {
      backgroundColor: variables.inputBg,
      color: variables.textColorOpacity,
      fontSize: 18,
      borderRadius: 13,
      paddingHorizontal: 10
    }
  })
}
