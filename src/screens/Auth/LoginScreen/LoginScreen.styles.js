import { StyleSheet } from 'react-native'
import { variables } from '../../../styles/variables.styles'

export const styles = StyleSheet.create({
  content: {
    margin: 20
  },
  title: {
    color: variables.textColorOpacity,
    marginVertical: 20,
    fontSize: 18,
    textAlign: 'center'
  },
  callToAction: {
    fontSize: 18,
    color: variables.textColorOpacity,
    textAlign: 'center'
  },
  action: {
    fontSize: 18,
    color: variables.brandColor,
    marginBottom: 30,
    textAlign: 'center',
    padding: 10
  },
  info: {
    color: variables.textColorOpacity,
    marginVertical: 15,
    textAlign: 'center'
  }
})
