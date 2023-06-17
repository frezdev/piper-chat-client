import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './Options.styles'

export function Options (props) {
  const { accessToken, user, logout } = props
  return (
    <View style={styles.content}>
      <View>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>Cambiar foto de perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>Cambiar nombre</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>Cambiar nombre</Text>
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
