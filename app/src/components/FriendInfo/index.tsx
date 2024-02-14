import React, { useContext } from 'react'

import { Container, Avatar, UserName } from './styles'
import { FriendContext } from '../../contexts/FriendContext'

const FriendInfo: React.FC = () => {
  const { friend } = useContext(FriendContext)

  return (
    <Container>
      <Avatar />
      <UserName>
        <strong>{friend?.name}</strong>
      </UserName>
    </Container>
  )
}

export default FriendInfo
