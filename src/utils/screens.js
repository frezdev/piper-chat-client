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
  grouScreen: 'GroupScreen',
  groupProfileScreen: 'GroupProfileScreen',
  addUserGroupScreen: 'AddUserGroupScreen',
  updateGroupInfoScreen: 'UpdateGroupInfoScreen'
}

const chats = {
  root: 'ChatsRoot',
  chatScreen: 'ChatsScreen',
  createChatScreem: 'CreateChatScreem'
}

const groups = {
  root: 'GroupRoot',
  chatGroupScreen: 'ChatGroupScreen',
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
