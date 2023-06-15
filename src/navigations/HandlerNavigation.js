import { useEffect, useState } from 'react'
import { AuthNavigation } from './stacks'
import { AppNavigation } from './AppNavigation'
import { useAuth } from '../hooks'
import { User } from '../api'
import { Text } from 'react-native'

const userController = new User()

export function HandlerNavigation () {
  const { user, updateUser } = useAuth()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    (async () => {
      const userStorage = await userController.getUserStorage()
      setTimeout(() => {
        if (userStorage) {
          updateUser({ value: userStorage })
        }
        setLoading(false)
      }, 1500)
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
