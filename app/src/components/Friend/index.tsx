import React, { useContext } from 'react'

import { FriendContext } from '../../contexts/FriendContext'
import { MessageProps } from '../Message'
import { Container, Avatar, UserInfo, Separator } from './styles'

export interface FriendProps {
  name: string | undefined
  messages: Array<MessageProps> | undefined
}

const Friend: React.FC<FriendProps> = friend => {
  const { setFriend } = useContext(FriendContext)

  return (
    <>
      <Separator />
      <Container
        onClick={() => {
          setFriend(friend)
        }}
      >
        <Avatar />
        <UserInfo>
          <strong>{friend.name}</strong>
          <p>last message...</p>
        </UserInfo>
      </Container>
    </>
  )
}

export default Friend
