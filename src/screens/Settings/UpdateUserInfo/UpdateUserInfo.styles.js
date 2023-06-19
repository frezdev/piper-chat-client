import { StyleSheet } from 'react-native'
import { Variables } from '../../../styles/variables.styles'

export function Styles () {
  const variables = Variables()

  return StyleSheet.create({
    content: {
      marginTop: 35,
      padding: 25
    },
    inputContainer: {
      marginBottom: 25
    },
    input: {
      color: variables.textColorOpacity,
      fontSize: 18,
      paddingBottom: 10,
      paddingTop: 10,
      borderColor: variables.brandColor,
      borderBottomWidth: 1,
      backgroundColor: variables.secundaryBackground
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
      padding: 12
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '700'
    },
    errorMessage: {
      color: variables.dangerColor,
      textAlign: 'center',
      fontWeight: '500',
      fontSize: 16
    }
  })
}
