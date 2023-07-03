import AsyncStorage from '@react-native-async-storage/async-storage'
import { ENV } from '../utils'

const { API_URL, ENDPOINTS } = ENV

export class Chat {
  async create (token, member_one, member_two) {
    try {
      const url = `${API_URL}/${ENDPOINTS.CHAT}`
      const params = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          member_one,
          member_two
        })
      }

      const response = await fetch(url, params)
      const result = await response.json()

      if (response.status !== 200 && response.status !== 201) throw result

      return result
    } catch (error) {
      if (error) throw error
    }
  }

  async getAll (token) {
    try {
      const url = `${API_URL}/${ENDPOINTS.CHAT}`
      const params = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      const response = await fetch(url, params)
      const result = await response.json()

      if (response.status !== 200) throw result

      return result
    } catch (error) {
      if (error) throw error
    }
  }

  async deleteChat (token, chat_id) {
    try {
      const url = `${API_URL}/${ENDPOINTS.CHAT}/${chat_id}`
      const params = {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      const response = await fetch(url, params)
      const result = await response.json()

      if (response.status !== 200) throw result

      return result
    } catch (error) {
      if (error) throw error
    }
  }

  async obtain (token, chat_id) {
    try {
      const url = `${API_URL}/${ENDPOINTS.CHAT}/${chat_id}`
      const params = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      const response = await fetch(url, params)
      const result = await response.json()

      if (response.status !== 200) throw result

      return result
    } catch (error) {
      if (error) throw error
    }
  }

  async getActiveChat () {
    const activeChat = await AsyncStorage.getItem(ENV.STORAGE.CHAT_OPEN)
    return activeChat
  }

  async setActiveChat (chat_id) {
    await AsyncStorage.setItem(ENV.STORAGE.CHAT_OPEN, chat_id)
  }
}
