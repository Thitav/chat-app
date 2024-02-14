import React from 'react'

import { Grid } from './styles'
import UserInfo from '../UserInfo'
import FriendInfo from '../FriendInfo'
import FriendsList from '../FriendsList'
import Chat from '../Chat'

const Layout: React.FC = () => {
  return (
    <Grid>
      <UserInfo />
      <FriendInfo />
      <FriendsList />
      <Chat />
    </Grid>
  )
}

export default Layout
