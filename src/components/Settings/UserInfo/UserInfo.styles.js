import { StyleSheet } from 'react-native'
import { Variables } from '../../../styles/variables.styles'

export function Styles () {
  const variables = Variables()
  return StyleSheet.create({
    content: {
      alignItems: 'center'
    },
    avatar: {
      marginTop: 20
    },
    identity: {
      color: variables.textColorOpacity,
      fontSize: 25,
      marginTop: 15,
      fontWeight: 'bold'
    },
    email: {
      color: variables.textColorOpacity
    }
  })
}
