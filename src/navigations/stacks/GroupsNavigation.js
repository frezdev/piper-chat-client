import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CreateGroupScreen, GroupsListScreen } from '../../screens/Groups'
import { screens } from '../../utils/screens'
import { Styles } from '../Styles.styles'

const Stack = createNativeStackNavigator()

export function GroupsNavigation () {
  const styles = Styles()
  return (
    <Stack.Navigator
      screenOptions={{
        ...styles.stackNavigationStyles
      }}
    >
      <Stack.Screen
        name={screens.tab.groups.groupScreen}
        component={GroupsListScreen}
        options={{ title: 'Grupos' }}
      />

      <Stack.Screen
        name={screens.tab.groups.createGroupScreen}
        component={CreateGroupScreen}
        options={{
          title: 'Nuevo grupo',
          presentation: 'modal',
          ...styles.modalStyles
        }}
      />
    </Stack.Navigator>
  )
}
