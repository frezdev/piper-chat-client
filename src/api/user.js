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
}
