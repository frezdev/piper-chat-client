import { StyleSheet } from 'react-native'
import { Variables } from '../../../styles/variables.styles'

export function Styles () {
  const variables = Variables()

  return StyleSheet.create({
    constent: {
      flex: 1,
      marginHorizontal: 20,
      justifyContent: 'space-evenly'
    },
    image: {
      width: '100%',
      height: 300,
      resizeMode: 'contain'
    },
    title: {
      color: variables.textColorNormal,
      textAlign: 'center',
      fontSize: 20
    },
    appName: {
      color: variables.textColorNormal,
      textAlign: 'center',
      fontSize: 35,
      fontWeight: 'bold',
      marginBottom: 20
    },
    description: {
      color: variables.textColorOpacity,
      textAlign: 'center',
      marginBottom: 10
    },
    btn: {
      color: variables.brandColor,
      textAlign: 'center',
      marginBottom: 15,
      fontWeight: '600',
      fontSize: 18,
      padding: 15
    },
    credits: {
      color: variables.textColorOpacity,
      textAlign: 'center',
      fontSize: 13,
      marginBottom: 20
    }
  })
}
