import AsyncStorage from '@react-native-async-storage/async-storage'
import { ENV } from '../utils'

const { API_URL, ENDPOINTS, JWT } = ENV

export class Auth {
  async register ({ email, password }) {
    try {
      const url = `${API_URL}/${ENDPOINTS.AUTH.REGISTER}`
      const params = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      }
      const response = await fetch(url, params)
      const result = await response.json()
      if (response.status !== 201) throw result

      return result
    } catch (error) {
      if (error.error.keyValue.email) {
        throw new Error('Este correo ya está registrado')
      }
      throw error
    }
  }

  async login ({ email, password }) {
    try {
      const url = `${API_URL}/${ENDPOINTS.AUTH.LOGIN}`
      const params = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      }
      const response = await fetch(url, params)
      const result = await response.json()
      if (response.status !== 200) throw result

      return result
    } catch (error) {
      if (error?.type === 'credencials') {
        throw new Error('Email o contraseña incorrectos')
      }
      throw error
    }
  }

  async refreshAccessToken (refreshToken) {
    // TODO...
  }

  async setAccessToken (token) {
    await AsyncStorage.setItem(JWT.ACCESS, token)
  }

  async getAccessToken () {
    return await AsyncStorage.getItem(JWT.ACCESS)
  }

  async setRefreshToken (token) {
    await AsyncStorage.setItem(JWT.REFRESH, token)
  }

  async getRefreshToken () {
    return await AsyncStorage.getItem(JWT.REFRESH)
  }

  async removeTokens () {
    await AsyncStorage.removeItem(JWT.ACCESS)
    await AsyncStorage.removeItem(JWT.REFRESH)
  }
}
