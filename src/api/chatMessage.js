import AsyncStorage from '@react-native-async-storage/async-storage'
import { ENV } from '../utils'
const { API_URL, ENDPOINTS } = ENV

export class ChatMessage {
  async getLastMessage (token, chat_id) {
    try {
      const url = `${API_URL}/${ENDPOINTS.CHAT_MESSAGE.LAST}/${chat_id}`
      const params = {
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

  async getTotalMessages (token, chat_id) {
    try {
      const url = `${API_URL}/${ENDPOINTS.CHAT_MESSAGE.TOTAL}/${chat_id}`
      const params = {
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

  async getUnredMessages (token, chat_id) {
    try {
      const url = `${API_URL}/${ENDPOINTS.CHAT_MESSAGE.UNREAD}/${chat_id}`
      const params = {
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

  async setTotalUnreadMessage (chat_id, count) {
    await AsyncStorage.setItem(`${chat_id}_unread`, JSON.stringify(count))
  }

  async getTotalUnreadMessages (chat_id) {
    const response = await AsyncStorage.getItem(`${chat_id}_unread`)
    return Number(response)
  }
}
