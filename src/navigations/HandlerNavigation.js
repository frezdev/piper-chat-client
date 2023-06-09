import React from 'react'
import { AuthNavigation } from './stacks'
import { AppNavigation } from './AppNavigation'

export function HandlerNavigation () {
  const user = { name: 'carlos' }
  return user ? <AppNavigation /> : <AuthNavigation />
}
