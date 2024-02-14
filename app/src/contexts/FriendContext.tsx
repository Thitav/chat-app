import React, { useState, createContext } from 'react'

import { FriendProps } from '../components/Friend'

export const FriendContext = createContext<{
  friend: FriendProps | undefined
  setFriend: (friend: FriendProps) => void
}>({
  friend: undefined,
  setFriend: () => {
    console.warn('no provider')
  }
})

const FriendProvider: React.FC = ({ children }) => {
  const [friend, setFriend] = useState<FriendProps>()

  return (
    <FriendContext.Provider value={{ friend, setFriend }}>
      {children}
    </FriendContext.Provider>
  )
}

export default FriendProvider
