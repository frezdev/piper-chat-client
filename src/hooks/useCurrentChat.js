import { useContext } from 'react'
import { ChatContext } from '../Context'

export const useCurrentChat = () => useContext(ChatContext)
