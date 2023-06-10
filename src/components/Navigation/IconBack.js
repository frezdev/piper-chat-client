import { ChevronLeftIcon, IconButton } from 'native-base'
import { useNavigation } from '@react-navigation/native'

export function IconBack () {
  const navigation = useNavigation()
  return (
    <IconButton
      icon={<ChevronLeftIcon style={{ width: 23, height: 23, color: '#0088d6' }} />}
      padding={1}
      onPress={navigation.goBack}
    />
  )
}
