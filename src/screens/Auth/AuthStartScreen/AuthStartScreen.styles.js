import { StyleSheet } from 'react-native'
import { dark } from '../../../Context/colorTheme'

const colors = {
  text: dark ? '#fff' : '#2a2a2a'
}

export const styles = StyleSheet.create({
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
    color: colors.text,
    textAlign: 'center',
    fontSize: 20
  },
  appName: {
    color: colors.text,
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20
  },
  description: {
    color: colors.text,
    textAlign: 'center',
    opacity: 0.6,
    marginBottom: 10
  },
  btn: {
    color: '#0088d6',
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: '600',
    fontSize: 18,
    padding: 15
  },
  credits: {
    color: colors.text,
    textAlign: 'center',
    opacity: 0.6,
    fontSize: 13,
    marginBottom: 20
  }
})
