import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './RegisterScreen.styles'

export function RegisterScreen () {
  const { goBack } = useNavigation()
  return (
    <View style={styles.content}>
      <Text style={styles.title}>
        Registrate y conectate con amigos
      </Text>
      {/* TODO: REGISTER FORM */}
      <Text style={{ color: '#fff' }}>Formulario</Text>

      <View>
        <Text style={styles.callToAction}>
          ¿Ya tienes una cuenta?
        </Text>
        <Text style={styles.action} onPress={goBack}>
          Inicia sesión
        </Text>
      </View>
    </View>
  )
}
