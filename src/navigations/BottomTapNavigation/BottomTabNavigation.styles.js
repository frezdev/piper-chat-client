import { StyleSheet } from 'react-native'
import { Variables } from '../../styles/variables.styles'

export function Styles () {
  const variables = Variables()
  const constants = {
    borderTopWidth: 0.6,
    paddingBottom: 4,
    height: 49
  }

  return StyleSheet.create({
    tabBarStyle: {
      backgroundColor: variables.secundaryBackground,
      borderTopColor: variables.borderColor,
      ...constants
    }
  })
}
