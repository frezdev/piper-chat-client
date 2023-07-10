import AsyncStorage from '@react-native-async-storage/async-storage'
import { ENV } from '../utils'
const { API_URL, ENDPOINTS } = ENV

export class ChatMessage {
  async getLastMessage (token, chatId) {
    try {
      const url = `${API_URL}/${ENDPOINTS.CHAT_MESSAGE.LAST}/${chatId}`
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

  async getTotalMessages (token, chatId) {
    try {
      const url = `${API_URL}/${ENDPOINTS.CHAT_MESSAGE.TOTAL}/${chatId}`
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

  async getUnredMessages (token, chatId) {
    try {
      const url = `${API_URL}/${ENDPOINTS.CHAT_MESSAGE.UNREAD}/${chatId}`
      const params = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      const response = await fetch(url, params)
      const result = await response.json()

      if (response.status !== 200) throw result
      return result?.totalUnread
    } catch (error) {
      if (error) throw error
    }
  }

  async updateReadMessages (token, chatId) {
    try {
      const url = `${API_URL}/${ENDPOINTS.CHAT_MESSAGE.UPDATE}/${chatId}`
      const params = {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      const response = await fetch(url, params)
      const result = await response.json()

      if (response.status !== 200 && response.status !== 300) throw result
      return result
    } catch (error) {
      if (error) throw error
    }
  }

  async getAllMessage (token, chatId) {
    try {
      const url = `${API_URL}/${ENDPOINTS.CHAT_MESSAGE.MESSAGES}/${chatId}`
      const params = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      const response = await fetch(url, params)
      const result = await response.json()

      if (response.status !== 200 && response.status !== 300) throw result
      return result
    } catch (error) {
      if (error) throw error
    }
  }

  async setTotalUnreadMessage (chatId, count) {
    await AsyncStorage.setItem(`${chatId}_unread`, JSON.stringify(count))
  }

  async getTotalUnreadMessages (chatId) {
    const response = await AsyncStorage.getItem(`${chatId}_unread`)
    return Number(response)
  }
}
