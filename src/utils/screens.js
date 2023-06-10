const auth = {
  authStartScreen: 'AuthStartScreen',
  loginScreen: 'LoginScreen',
  registerScreen: 'RegisterScreen'
}

const global = {
  userProfileScreen: 'UserProfileScreen',
  cameraScreen: 'CameraScreen',
  imageFullScreen: 'ImageFullScreen',
  chatScreen: 'ChatScreen',
  groupScreen: 'GroupScreen',
  groupProfileScreen: 'GroupProfileScreen',
  addParticipantsToGroupScreen: 'AddParticipantsToGroupScreen',
  updateGroupInfoScreen: 'UpdateGroupInfoScreen'
}

const chats = {
  root: 'ChatsRoot',
  chatScreen: 'ChatsScreen',
  createChatScreem: 'CreateChatScreem'
}

const groups = {
  root: 'GroupRoot',
  groupScreen: 'GroupScreen',
  createGroupScreen: 'CreateGroupScreen'
}

const settings = {
  root: 'SettingsRoot',
  settingsScreen: 'SettingsScreen',
  updateUserInfoScreen: 'UpdateUserInfoScreen'
}

export const screens = {
  auth,
  global,
  tab: {
    root: 'BottonTabRoot',
    chats,
    groups,
    settings
  }
}
