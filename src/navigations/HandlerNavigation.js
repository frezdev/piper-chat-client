import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { AuthNavigation } from './stacks'

function AppNavigation () {
  return (
    <View>
      <Text>App Navigation</Text>
      <TextInput />
    </View>
  )
}

export function HandlerNavigation () {
  const user = null
  return user ? <AppNavigation /> : <AuthNavigation />
}
