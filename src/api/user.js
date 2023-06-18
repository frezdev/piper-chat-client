import AsyncStorage from '@react-native-async-storage/async-storage'
import { ENV } from '../utils'

const { API_URL, ENDPOINTS } = ENV

export class User {
  async getMe (accessToken) {
    try {
      const url = `${API_URL}/${ENDPOINTS.USER.GET_ME}`

      const params = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`
        }
      }

      const response = await fetch(url, params)
      const result = await response.json()

      if (response.status !== 200) throw result
      return result
    } catch (error) {
      if (error) {
        throw error
      }
    }
  }

  async updateUser (accessToken, userData) {
    try {
      const url = `${API_URL}/${ENDPOINTS.USER.GET_ME}`

      const data = userData

      const formData = new FormData()
      Object.keys(data).forEach(key => {
        formData.append(key, data[key])
        console.log(key, data[key])
      })

      const params = {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        body: formData
      }

      const response = await fetch(url, params)
      const result = await response.json()

      if (response.status !== 200) throw result
      return result
    } catch (error) {
      if (error) {
        throw error
      }
    }
  }

  async setUserStorage (userData) {
    await AsyncStorage.setItem(ENV.STORAGE.USER, JSON.stringify(userData))
  }

  async getUserStorage () {
    const userStorage = await AsyncStorage.getItem(ENV.STORAGE.USER)
    return JSON.parse(userStorage)
  }

  async removeUserStorage () {
    await AsyncStorage.removeItem(ENV.STORAGE.USER)
  }
}
