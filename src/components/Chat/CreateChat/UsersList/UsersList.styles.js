import { StyleSheet } from 'react-native'
import { Variables } from '../../../../styles/variables.styles'

export function Styles () {
  const variables = Variables()

  return StyleSheet.create({
    content: {
      paddingHorizontal: 10,
      marginBottom: 25,
      paddingBottom: 50
    },
    item: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: variables.borderColor,
      paddingVertical: 7,
      alignItems: 'center'
    },
    name: {
      fontWeight: '600',
      color: variables.textColorOpacity,
      fontSize: 18
    }
  })
}
