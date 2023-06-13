import { StyleSheet } from 'react-native'
import { variables } from '../styles/variables.styles'

export const styles = StyleSheet.create({
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
      backgroundColor: '#171717'
    },
    headerStyle: {
      backgroundColor: '#171717'
    },
    headerTitleStyle: {
      color: '#fff'
    }
  }
})
