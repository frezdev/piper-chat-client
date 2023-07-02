import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { CreateChat, Search } from '../../components/Chat'
import { User } from '../../api'
import { useAuth } from '../../hooks'

const userController = new User()

export function CreateChatScreen () {
  const { accessToken } = useAuth()
  const [users, setUsers] = useState([])
  const [userResult, setUserResult] = useState([])
  const navigation = useNavigation()

  useEffect(() => {
    (async () => {
      try {
        const response = await userController.getAll(accessToken)
        setUsers(response)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  if (!userResult) return null

  return (
    <View>
      <Search data={users} setData={setUserResult} clear />
      <CreateChat.UsersList users={userResult} />
    </View>
  )
}
