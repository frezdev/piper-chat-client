import { SafeAreaView, View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { screens } from '../../../utils'
import { images } from '../../../assets'
import { styles } from './AuthStartScreen.styles'

export function AuthStartScreen () {
  const { navigate } = useNavigation()

  const goToLogin = () => {
    navigate(screens.auth.loginScreen)
  }
  return (
    <SafeAreaView style={styles.constent}>
      <Image source={images.auth01} style={styles.image}/>
      <View>
        <Text style={styles.title}>Bievenido a</Text>
        <Text style={styles.appName}>PiperChat</Text>
      </View>
      <View>
        <Text style={styles.description}>
          Consulta nuestras Políticas de privacidad.
          Pulsa "Aceptar y continuar" para aceptar las
          condiciones del servicio
        </Text>
        <Text style={styles.btn} onPress={goToLogin}>
          Aceptar y continuar
        </Text>
      </View>
      <View>
        <Text style={styles.credits}>
          Desarrollado con 💙 por @ancoder
        </Text>
      </View>
    </SafeAreaView>
  )
}
