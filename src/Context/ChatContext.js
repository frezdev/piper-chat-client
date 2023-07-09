import { useState, createContext } from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import { ENV } from '../utils/constants'

export const ChatContext = createContext()

const INITIAL_STATE = {
  userTwo: null
}

export function ChatProvider ({ children }) {
  const [currentChat, setCurrentChat] = useState(INITIAL_STATE)

  const updateUsertChat = (userTwo) => {
    setCurrentChat({ ...currentChat, userTwo })
  }

  const value = {
    currentChat,
    updateUsertChat
  }

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  )
}
