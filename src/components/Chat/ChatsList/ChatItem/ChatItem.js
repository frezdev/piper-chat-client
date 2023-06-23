import { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from 'native-base'
import { size } from 'lodash'
import { ENV } from '../../../../utils'
import { Styles } from './ChatItem.styles'

export function ChatItem (props) {
  const { chat } = props
  const styles = Styles()

  return (
    <>
      <TouchableOpacity style={styles.content}>
        <Text>ChatItem</Text>
      </TouchableOpacity>
    </>
  )
}
