import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CreateChatScreen, ChatScreen } from '../../screens/Chats'
import { screens } from '../../utils/screens'
import { styles } from '../Styles.styles'

const Stack = createNativeStackNavigator()

export function ChatsNavigation () {
  return (
    <Stack.Navigator
      screenOptions={{
        ...styles.stackNavigationStyles
      }}
    >
      <Stack.Screen
        name={screens.tab.chats.chatScreen}
        component={ChatScreen}
        options={{ title: 'Chats' }}
      />

      <Stack.Screen
        name={screens.tab.chats.createChatScreem}
        component={CreateChatScreen}
        options={{
          title: 'Nuevo Chat',
          ...styles.modalStyles
        }}
      />
    </Stack.Navigator>
  )
}
