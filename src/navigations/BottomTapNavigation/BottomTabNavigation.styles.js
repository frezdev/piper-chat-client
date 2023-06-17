import { StyleSheet } from 'react-native'
import { variables } from '../../styles/variables.styles'
const constants = {
  borderTopWidth: 0.6,
  paddingBottom: 4,
  height: 49
}
export const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: variables.secundaryBackground,
    borderTopColor: variables.borderColor,
    ...constants
  }
})
