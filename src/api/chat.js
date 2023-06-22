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
        headers: {
          method: 'GET',
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
}
