import React from 'react'

import { Container } from './styles'
import { MessageProps } from '../Message'
import Friend from '../Friend'

const data = [
  {
    name: 'Tavares',
    messages: [
      {
        text: 'oi',
        time: '17:01'
      },
      {
        text: 'ola',
        author: 'Tavares',
        time: '17:02'
      }
    ] as Array<MessageProps>
  },
  {
    name: 'Edu',
    messages: [
      {
        text: 'eae mano',
        time: '17:06'
      },
      {
        text: 'tdb?',
        author: 'Edu',
        time: '17:11'
      }
    ] as Array<MessageProps>
  },
  {
    name: 'Alexandre',
    messages: [
      {
        text: 'opa',
        time: '17:06'
      },
      {
        text: 'opa',
        author: 'Alexandre',
        time: '17:11'
      }
    ] as Array<MessageProps>
  }
]

const FriendsList: React.FC = () => {
  return (
    <Container>
      {data.map((friend, i) => {
        return <Friend key={i} name={friend.name} messages={friend.messages} />
      })}
    </Container>
  )
}

export default FriendsList
