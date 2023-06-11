import { StyleSheet } from 'react-native'
import { variables } from '../../../styles/variables.styles'

export const styles = StyleSheet.create({
  content: {
    margin: 20
  },
  title: {
    color: variables.textColor,
    opacity: 0.6,
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 15
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
    padding: 10,
    textAlign: 'center'
  }
})
