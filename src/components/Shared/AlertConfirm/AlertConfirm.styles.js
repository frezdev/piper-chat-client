import { StyleSheet } from 'react-native'
import { Variables } from '../../../styles/variables.styles'

export function Styles () {
  const variables = Variables()

  return StyleSheet.create({
    content: {
      borderWidth: 1,
      borderColor: variables.borderColor

    },
    header: {
      backgroundColor: variables.secundaryBackground,
      borderBottomColor: variables.secundaryBackground,
      borderButtomWidth: 0
    },
    titleText: {
      color: variables.textColorNormal,
      fontWeight: 'bold',
      fontSize: 17
    },
    closeButton: {
      borderRadius: 50,
      bg: variables.borderColor
    },
    body: {
      backgroundColor: variables.secundaryBackground
    },
    messageText: {
      color: variables.textColorOpacity,
      textAlign: 'center',
      fontSize: 16
    },
    footer: {
      backgroundColor: variables.secundaryBackground,
      borderTopWidth: 0,
      borderBottomWidth: 0
    },
    buttonsContainer: {
      flex: 1,
      marginTop: 10,
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'center'
    },
    button: {
      width: '48%'
    },
    cancel: {
      color: variables.brandColor,
      fontSize: 18
    },
    buttonConfirm: {
      fontSize: 18
    },

    danger: {
      backgroundColor: variables.dangerColor
    },
    confirm: {
      backgroundColor: variables.brandColor
    }
  })
}
