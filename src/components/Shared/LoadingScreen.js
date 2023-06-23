import { View } from 'react-native'
import { Spinner, Heading } from 'native-base'

export function LoadingScreen () {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Spinner size='lg' color='gray.400' />
      <Heading color='gray.500' fontSize='md' marginTop={2}>
        Cargando...
      </Heading>
    </View>
  )
}

/*
  VStack no funciona en algunas versiones de Android
  en su lugar utilisaremos el componente View de react-native

  import { Spinner, Heading, VStack } from 'native-base'

  export function LoadingScreen () {
    return (
      <VStack flex alignItems='center' justifyContent='center'>
        <Spinner size='lg' color='gray.400' />
        <Heading color='primary.500' fontSize='md' marginTop={2}>
          Cargando...
        </Heading>
      </VStack>
    )
  }
*/
