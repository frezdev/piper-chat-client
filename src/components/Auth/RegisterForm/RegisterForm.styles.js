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
    color: variables.textColor,
    fontSize: 18,
    paddingBottom: 10,
    paddingTop: 10,
    borderColor: variables.brandColor,
    borderBottomWidth: 1
  },
  inputError: {
    backgroundColor: '#ff131330',
    borderBottomColor: '#fc3737'
  },
  buttonContainer: {
    marginVertical: 25
  },
  button: {
    backgroundColor: variables.brandColor,
    color: '#fff',
    fontSize: 16
  }
})
