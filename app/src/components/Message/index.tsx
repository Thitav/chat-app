import React from 'react'

import { Container, Frame } from './styles'

export interface MessageProps {
  text: string
  time: string
  author?: string
}

const Message: React.FC<MessageProps> = ({ text, author, time }) => {
  if (author) {
    return (
      <Container style={{ marginRight: 'auto' }}>
        <strong>{author}</strong>
        <Frame>
          {text}
          <p>{time}</p>
        </Frame>
      </Container>
    )
  } else {
    return (
      <Container style={{ marginLeft: 'auto' }}>
        <strong>You</strong>
        <Frame>
          {text}
          <p>{time}</p>
        </Frame>
      </Container>
    )
  }
}

export default Message
