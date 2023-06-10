import { StyleSheet } from 'react-native'
import { dark } from '../Context/colorTheme'

const darkTheme = StyleSheet.create({
  stackNavigationStyles: {
    contentStyle: {
      backgroundColor: '#000'
    },
    headerStyle: {
      backgroundColor: '#121212'
    },
    headerTitleStyle: {
      color: '#fff'
    },
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

const lightTheme = StyleSheet.create({
  stackNavigationStyles: {
    contentStyle: {
      backgroundColor: '#fff'
    },
    headerStyle: {
      backgroundColor: '#fff'
    },
    headerTitleStyle: {
      color: '#000'
    },
    headerTitleAlign: 'center'
  },
  modalStyles: {
    contentStyle: {
      backgroundColor: '#ededed'
    },
    headerStyle: {
      backgroundColor: '#ededed'
    },
    headerTitleStyle: {
      color: '#fff'
    }
  }
})

export const styles = dark ? darkTheme : lightTheme
