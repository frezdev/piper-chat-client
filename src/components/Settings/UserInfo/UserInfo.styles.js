import { StyleSheet } from 'react-native'
import { variables } from '../../../styles/variables.styles'

export const styles = StyleSheet.create({
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
