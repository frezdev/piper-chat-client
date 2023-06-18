import { useEffect, useState } from 'react'
import { AuthNavigation } from './stacks'
import { AppNavigation } from './AppNavigation'
import { useAuth } from '../hooks'
import { User, Auth } from '../api'
import { Text } from 'react-native'

const userController = new User()
const authController = new Auth()

export function HandlerNavigation () {
  const { user, updateUser } = useAuth()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    (async () => {
      try {
        const token = await authController.getAccessToken()
        const userData = await userController.getMe(token)
        await userController.setUserStorage(userData)
        updateUser({ value: userData })
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  if (loading && !user) {
    return (
      <Text style={{ textAlign: 'center', marginVertical: 80, fontSize: 18 }}>
        Cargando...
      </Text>
    )
  }
  return user ? <AppNavigation /> : <AuthNavigation />
}
