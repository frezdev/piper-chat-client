import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ButtomTabNavigation } from './BottomTapNavigation'
import { UserProfileScreen, ImageFullScreen, CameraScreen } from '../screens/Global'
import { ChatScreen } from '../screens/Chats'
import {
  GroupChatScreen,
  GroupProfileScreen,
  UpdateGroupInfoScreen,
  AddParticipantsToGroupScreen
} from '../screens/Groups'

import { screens } from '../utils'
import { styles } from './Styles.styles'

const Stack = createNativeStackNavigator()

export function AppNavigation () {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.tab.root}
        component={ButtomTabNavigation}
        options={{ headerShown: false }}
      />

      <Stack.Group screenOptions={{ headerShown: false, ...styles.stackNavigationStyles }}>
        <Stack.Screen
          name={screens.global.chatScreen}
          component={ChatScreen}
        />
        <Stack.Screen
          name={screens.global.groupScreen}
          component={GroupChatScreen}
        />
      </Stack.Group>

      <Stack.Group screenOptions={{ presentation: 'modal', ...styles.modalStyles }}>
        <Stack.Screen
          name={screens.global.userProfileScreen}
          component={UserProfileScreen}
          options={{ title: 'Información' }}
        />

        <Stack.Screen
          name={screens.global.groupProfileScreen}
          component={GroupProfileScreen}
          options={{ title: 'Información del grupo' }}
        />

        <Stack.Screen
          name={screens.global.addParticipantsToGroupScreen}
          component={AddParticipantsToGroupScreen}
          options={{ title: 'Añadir participantes' }}
        />

        <Stack.Screen
          name={screens.global.updateGroupInfoScreen}
          component={UpdateGroupInfoScreen}
          options={{ title: 'Editar grupo' }}
        />

        <Stack.Screen
          name={screens.global.cameraScreen}
          component={CameraScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={screens.global.imageFullScreen}
          component={ImageFullScreen}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}
