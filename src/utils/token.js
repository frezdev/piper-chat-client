import jwtDecode from 'jwt-decode'

export function hasExpiredToken (token) {
  const { exp } = jwtDecode(token)
  const currentTime = new Date().getTime()

  if (exp <= currentTime) return true

  return false
}
