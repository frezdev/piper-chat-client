import { StyleSheet } from 'react-native'
import { Variables } from '../../../../styles/variables.styles'

export function Styles () {
  const variables = Variables()

  return StyleSheet.create({
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 80
    },
    avatar: {
    },
    infoContent: {
      flex: 1,
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: variables.borderColor,
      padding: 10,
      justifyContent: 'space-between',
      height: '100%',
      position: 'relative',
      gap: 4
    },
    info: {
      flex: 1,
      justifyContent: 'flex-start',
      gap: 4
    },
    identity: {
      fontWeight: 'bold',
      fontSize: 18,
      width: '70%',
      color: variables.textColorNormal
    },
    message: {
      color: variables.textColorOpacity2,
      width: '85%',
      fontSize: 15
    },
    details: {
      position: 'absolute',
      right: 5,
      top: 10
    },
    time: {
      color: variables.brandColor,
      fontWeight: '500',
      fontSize: 15
    },
    totalUnreadMessagesContainer: {
      position: 'absolute',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      right: 0,
      top: 25,
      backgroundColor: variables.brandColor,
      width: 20,
      height: 20,
      borderRadius: 50,
      padding: 0
    },
    totalUnreadMessages: {
      textAlign: 'center',
      color: variables.appBackground,
      fontSize: 13,
      fontWeight: '400'
    },
    unread: {
      fontWeight: 'bold',
      color: variables.textColorNormal
    },
    noNewMessages: {
      color: variables.textColorOpacity2
    }
  })
}
