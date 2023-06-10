import { AuthNavigation } from './stacks'
import { AppNavigation } from './AppNavigation'

export function HandlerNavigation () {
  const user = null
  return user ? <AppNavigation /> : <AuthNavigation />
}
