import { StyleSheet } from 'react-native'
import { variables } from '../../../styles/variables.styles'

export const styles = StyleSheet.create({
  content: {
    margin: 10
  },
  inputContainer: {
    marginBottom: 15
  },
  input: {
    color: variables.textColorOpacity,
    fontSize: 18,
    paddingBottom: 10,
    paddingTop: 10,
    borderColor: variables.brandColor,
    borderBottomWidth: 1
  },
  inputError: {
    backgroundColor: variables.dangerColorOpacity,
    borderBottomColor: variables.dangerColor
  },
  buttonContainer: {
    marginVertical: 25
  },
  button: {
    backgroundColor: variables.brandColor,
    color: '#fff',
    fontSize: 16
  },
  errorMessage: {
    color: variables.dangerColor,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 16
  }
})
