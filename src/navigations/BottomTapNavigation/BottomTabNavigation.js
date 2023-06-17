import { Icon } from 'native-base'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { screens } from '../../utils'
import {
  ChatsNavigation,
  GroupsNavigation,
  SettingsNavigation
} from '../stacks'
import { Variables } from '../../styles/variables.styles'
import { Styles } from './BottomTabNavigation.styles'

const Tab = createBottomTabNavigator()

const screenIcon = (route, color, size) => {
  let iconName = ''
  switch (route.name) {
    case screens.tab.chats.root:
      iconName = 'chat'
      break
    case screens.tab.groups.root:
      iconName = 'account-group'
      break
    case screens.tab.settings.root:
      iconName = 'cog-outline'
      break
  }
  return (
    <Icon
      as={MaterialCommunityIcons}
      name={iconName}
      color={color}
      size={size}
    />
  )
}

export function ButtomTabNavigation () {
  const styles = Styles()
  const variables = Variables()
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarInactiveTintColor: '#949798',
        tabBarActiveTintColor: variables.brandColor,
        tabBarIcon: ({ color, size }) => screenIcon(route, color, size)
      })}
    >
      <Tab.Screen
        name={screens.tab.chats.root}
        component={ChatsNavigation}
        options={{ title: 'Chats' }}
      />

      <Tab.Screen
        name={screens.tab.groups.root}
        component={GroupsNavigation}
        options={{ title: 'Grupos' }}
      />

      <Tab.Screen
        name={screens.tab.settings.root}
        component={SettingsNavigation}
        options={{ title: 'Configuración' }}
      />
    </Tab.Navigator>
  )
}
