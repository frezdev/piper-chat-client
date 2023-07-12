import { useColorTheme } from '../hooks/useColorTheme'

export function Variables () {
  const { dark } = useColorTheme()
  const variables = {
    brandColor: '#0088d6',
    dangerColor: '#fc3737',
    dangerColorOpacity: '#ff131330',
    textColorOpacity: dark ? '#bcbcbc' : '#4b4b4b',
    textColorOpacity2: dark ? '#949494' : '#868686',
    textColorNormal: dark ? '#fff' : '#000',
    secundaryBackground: dark ? '#0e0e0e' : '#f4f4f4',
    appBackground: dark ? '#000' : '#fff',
    borderColor: dark ? '#343434' : '#d0d0d0',
    inputBg: dark ? '#a5a5a53b' : '#a5a5a52b',
    messageBg: dark ? '#00629a' : '#00a2ff'
  }
  return variables
}
