import React, { useContext, useState } from 'react'

import { Container, Messages, InputWrapper, Input, EmoteIcon } from './styles'
import { FriendContext } from '../../contexts/FriendContext'
import Message, { MessageProps } from '../Message'
import date from 'date-and-time'

const Chat: React.FC = () => {
  const { friend } = useContext(FriendContext)
  const [message, setMessage] = useState('')

  const submit = () => {
    const newMessage = {
      text: message,
      time: date.format(new Date(), 'HH:mm')
    } as MessageProps

    friend?.messages?.push(newMessage)
    setMessage('')
  }

  return (
    <Container>
      <Messages>
        {friend?.messages?.map((message, i) => {
          return <Message key={i} {...message} />
        })}
      </Messages>
      <InputWrapper
        onSubmit={event => {
          event.preventDefault()
          submit()
        }}
      >
        <EmoteIcon />
        <Input
          type="text"
          placeholder="Write your message here..."
          value={message}
          onChange={event => setMessage(event.target.value)}
        />
        <input type="submit" style={{ display: 'none' }} />
      </InputWrapper>
    </Container>
  )
}

export default Chat
