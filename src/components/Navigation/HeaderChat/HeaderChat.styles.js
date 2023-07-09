import { StyleSheet, Platform, StatusBar } from 'react-native'
import { Variables } from '../../../styles/variables.styles'

export function Styles () {
  const variables = Variables()

  return StyleSheet.create({
    container: {
      backgroundColor: variables.secundaryBackground,
      marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      height: Platform.OS === 'android' ? 65 : 80,
      paddingHorizontal: 2
    },
    content: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 5
    },
    avatar: {
      backgroundColor: variables.brandColor
    },
    info: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    identity: {
      color: variables.textColorNormal,
      marginHorizontal: 5,
      fontSize: 16,
      fontWeight: 'bold'
    },
    deleteIcon: {
      color: variables.brandColor
    }
  })
}
