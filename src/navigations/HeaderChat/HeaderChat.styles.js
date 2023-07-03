import { StyleSheet, Platform, StatusBar } from 'react-native'
import { Variables } from '../../styles/variables.styles'

export function Styles () {
  const variables = Variables()

  return StyleSheet.create({
    container: {
      backgroundColor: variables.secundaryBackground,
      marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      height: 80
    },
    content: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 5
    },
    info: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    deleteIcon: {
      color: variables.brandColor
    }
  })
}
