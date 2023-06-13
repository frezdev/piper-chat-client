import { SERVER_IP, BASE_URL } from '../../env'

export const ENV = {
  SERVER_IP,
  BASE_URL,
  API_URL: `${BASE_URL}/api/v1`,
  SOCKET_URL: BASE_URL,
  ENDPOINTS: {
    AUTH: {
      REGISTER: 'auth/register',
      LOGIN: 'auth/login'
    }
  }
}
