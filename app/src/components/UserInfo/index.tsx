import React from 'react'

import { Container, Avatar, UserName, Icons, SettingsIcon } from './styles'

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Avatar />
      <UserName>
        <strong>You</strong>
      </UserName>
      <Icons>
        <SettingsIcon />
      </Icons>
    </Container>
  )
}

export default UserInfo
