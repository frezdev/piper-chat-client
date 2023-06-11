import { StyleSheet } from 'react-native'
import { variables } from '../../../styles/variables.styles'

export const styles = StyleSheet.create({
  content: {
    margin: 20
  },
  title: {
    color: variables.textColor,
    marginVertical: 15,
    opacity: 0.6
  },
  callToAction: {
    fontSize: 18,
    color: variables.textColor,
    textAlign: 'center',
    opacity: 0.6
  },
  action: {
    fontSize: 18,
    color: variables.brandColor,
    marginBottom: 30,
    textAlign: 'center',
    padding: 10
  },
  info: {
    color: variables.textColor,
    marginVertical: 15,
    textAlign: 'center',
    opacity: 0.6
  }
})
