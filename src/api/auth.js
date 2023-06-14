import { ENV } from '../utils'

const { API_URL, ENDPOINTS } = ENV

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
}
