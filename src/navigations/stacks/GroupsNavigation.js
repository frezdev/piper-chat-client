import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CreateGroupScreen, GroupsScreen } from '../../screens/Groups'
import { screens } from '../../utils/screens'
import { styles } from '../Styles.styles'

const Stack = createNativeStackNavigator()

export function GroupsNavigation () {
  return (
    <Stack.Navigator
      screenOptions={{
        ...styles.stackNavigationStyles
      }}
    >
      <Stack.Screen
        name={screens.tab.groups.groupScreen}
        component={GroupsScreen}
        options={{ title: 'Grupos' }}
      />

      <Stack.Screen
        name={screens.tab.groups.createGroupScreen}
        component={CreateGroupScreen}
        options={{
          title: 'Nuevo grupo',
          ...styles.modalStyles
        }}
      />
    </Stack.Navigator>
  )
}
