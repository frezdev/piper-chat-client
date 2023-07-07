import { StyleSheet } from 'react-native'
import { Variables } from '../styles/variables.styles'

export function Styles () {
  const variables = Variables()

  return StyleSheet.create({
    stackNavigationStyles: {
      contentStyle: {
        backgroundColor: variables.appBackground
      },
      headerStyle: {
        backgroundColor: variables.secundaryBackground
      },
      headerTitleStyle: {
        color: variables.textColorNormal,
        fontSize: 18
      },
      animation: 'slide_from_right',
      headerTitleAlign: 'center'
    },
    modalStyles: {
      contentStyle: {
        backgroundColor: variables.appBackground
      },
      headerStyle: {
        backgroundColor: variables.secundaryBackground
      },
      headerTitleStyle: {
        color: variables.textColorNormal
      },
      animation: 'slide_from_right',
      headerTitleAlign: 'center'
    }
  })
}
