import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { screens } from '../../../utils'
import { LoginForm } from '../../../components/Auth'
import { styles } from './LoginScreen.styles'

export function LoginScreen () {
  const { navigate } = useNavigation()

  const goToRegister = () => {
    navigate(screens.auth.registerScreen)
  }
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Comienza a chatear!</Text>

      <LoginForm />
      <View>
        <Text style={styles.callToAction}>
          ¿Aún no tienes una cuenta?
        </Text>
        <Text style={styles.action} onPress={goToRegister}>
          Regístrate
        </Text>
      </View>

      <Text style={styles.info}>
        Debes tener al menos 16 años de edad
        o estar bajo supervisión de un adulto responsable.
      </Text>
    </View>
  )
}
