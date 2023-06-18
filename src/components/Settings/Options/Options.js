import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useColorTheme } from '../../../hooks/useColorTheme'
import * as ImagePicker from 'expo-image-picker'
import { imageExpoFormat, screens } from '../../../utils'
import { User } from '../../../api'
import { Styles } from './Options.styles'

const userController = new User()

export function Options (props) {
  const { accessToken, user, logout, updateUser } = props
  const { updateTheme, dark } = useColorTheme()
  const { navigate } = useNavigation()
  const styles = Styles()

  const openGalery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1
    })
    if (!result.canceled) {
      const file = imageExpoFormat(result.assets[0].uri)
      updateUserData({ avatar: file })
    }
  }

  const updateUserData = async (userData) => {
    try {
      const response = await userController.updateUser(accessToken, userData)
      updateUser({ key: 'avatar', value: response.avatar })
      await userController.setUserStorage(response)
      console.log({ response })
    } catch (error) {
      console.error(error)
    }
  }

  const goToChangeName = () => {
    navigate(screens.tab.settings.updateUserInfoScreen)
  }

  return (
    <View style={styles.content}>
      <View>
        <TouchableOpacity style={styles.item} onPress={openGalery}>
          <Text style={styles.text}>Cambiar foto de perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={goToChangeName}>
          <Text style={styles.text}>Cambiar nombre</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={updateTheme}>
          <Text style={styles.text}>{dark ? 'Desactivar' : 'Activar'} tema oscuro</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.item, styles.logout]} onPress={logout}>
        <Text style={styles.textLogout}
        >
          Cerrar sesión
        </Text>
      </TouchableOpacity>
    </View>
  )
}
