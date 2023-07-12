import { StyleSheet } from 'react-native'
import { Variables } from '../../styles/variables.styles'

export const Styles = () => {
  const variables = Variables()

  return StyleSheet.create({
    content: {
      backgroundColor: variables.secundaryBackground
    }
  })
}
