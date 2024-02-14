import React from 'react'

import Layout from './components/Layout'
import GlobalStyles from './styles/GlobalStyles'
import FriendProvider from './contexts/FriendContext'

function App(): JSX.Element {
  return (
    <FriendProvider>
      <Layout />
      <GlobalStyles />
    </FriendProvider>
  )
}

export default App
