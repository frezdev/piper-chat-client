import { SERVER_IP, BASE_URL, SUPABASE_API_KEY, SUPABASE_URL, IMAGES_URL } from '../../env'

export const ENV = {
  SERVER_IP,
  BASE_URL,
  API_URL: `${BASE_URL}/api/v1`,
  SOCKET_URL: BASE_URL,
  ENDPOINTS: {
    AUTH: {
      REGISTER: 'auth/register',
      LOGIN: 'auth/login',
      REFRESH_ACCESS_TOKEN: 'auth/refresh-access-toker'
    },
    USER: {
      GET_ME: 'users/me',
      ALL_USERS: 'users'
    },
    CHAT: 'chats',
    CHAT_MESSAGE: {
      LAST: 'chat/messages/last',
      TOTAL: 'chat/messages/total',
      UNREAD: 'chat/messages/unread'
    }
  },
  JWT: {
    ACCESS: 'access',
    REFRESH: 'refresh'
  },
  STORAGE: {
    USER: 'user',
    COLOR_THEME: 'colorTheme'
  },
  SUPABASE_API_KEY,
  SUPABASE_URL,
  IMAGES_URL
}
