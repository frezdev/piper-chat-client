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
      USERS: 'users'
    },
    CHAT: 'chats',
    CHAT_MESSAGE: {
      MESSAGES: 'chat/messages',
      LAST: 'chat/messages/last',
      TOTAL: 'chat/messages/total',
      UNREAD: 'chat/messages/unread',
      UPDATE: 'chat/messages/update'
    }
  },
  JWT: {
    ACCESS: 'access',
    REFRESH: 'refresh'
  },
  STORAGE: {
    USER: 'user',
    COLOR_THEME: 'colorTheme',
    CHAT_OPEN: 'CHAT_OPEN'
  },
  SUPABASE_API_KEY,
  SUPABASE_URL,
  IMAGES_URL
}
