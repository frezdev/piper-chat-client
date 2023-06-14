import { useState, useEffect, createContext } from 'react'
import { User } from '../api'

const userController = new User()
export const AuthContext = createContext()

export function AuthProvider (props) {
  const { children } = props
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      setLoading(false)
    })()
  }, [])

  const reLogin = async (refreshToken) => {
    // ...TODO
  }

  const login = async (accessToken) => {
    try {
      const response = await userController.getMe(accessToken)
      setLoading(true)
      setUser(response)
      setToken(accessToken)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  const logout = async () => {
    // ...TODO
  }

  const updateUser = (key, value) => {
    // ...TODO
  }

  const data = {
    accessToken: token,
    user,
    login,
    logout,
    updateUser
  }

  if (loading) return null
  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}
