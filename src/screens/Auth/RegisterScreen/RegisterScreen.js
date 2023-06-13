import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RegisterForm } from '../../../components/Auth'
import { styles } from './RegisterScreen.styles'

export function RegisterScreen () {
  const { goBack } = useNavigation()
  return (
    <View style={styles.content}>
      <Text style={styles.title}>
        Registrate y conectate con amigos
      </Text>

      <RegisterForm />

      <View>
        <Text style={styles.callToAction}>
          ¿Ya tienes una cuenta?
        </Text>
        <Text style={styles.action} onPress={goBack}>
          Inicia sesión
        </Text>
      </View>
      <Text style={styles.info}>
        Debes tener al menos 16 años de edad
        o estar bajo supervisión de un adulto responsable.
      </Text>
    </View>
  )
}
