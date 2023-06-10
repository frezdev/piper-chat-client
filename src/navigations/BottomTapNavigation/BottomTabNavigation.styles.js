import { dark } from '../../Context/colorTheme'
import { StyleSheet } from 'react-native'
const constants = {
  borderTopWidth: 0.6,
  paddingBottom: 4,
  height: 49
}
const darkTheme = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#121212',
    borderTopColor: '#343434',
    ...constants
  }
})

const lightTheme = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#f6f6f6',
    borderTopColor: '#d5d5d5',
    ...constants
  }
})

export const styles = dark ? darkTheme : lightTheme
