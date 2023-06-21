import { StyleSheet } from 'react-native'
import { Variables } from '../../../../styles/variables.styles'

export function Styles () {
  const variables = Variables()

  return StyleSheet.create({
    content: {
      paddingHorizontal: 10,
      paddingBottom: 50
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 80
    },
    info: {
      borderBottomWidth: 1,
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      padding: 10,
      borderBottomColor: variables.borderColor,
      height: '100%',
      width: '100%'
    },
    name: {
      fontWeight: 'bold',
      color: variables.textColorOpacity,
      fontSize: 19
    },
    email: {
      fontSize: 14,
      fontWeight: '400',
      color: variables.textColorOpacity
    }
  })
}
