import styled from 'styled-components'

export const Container = styled.div`
  grid-area: FI;
  display: flex;
  background: var(--quaternary);
  align-items: center;
  padding: 15px;
  background: var(--quaternary);
`

export const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #000;
`

export const UserName = styled.div`
  color: var(--text);
  margin-left: 25px;
  > strong {
    font-size: 25px;
  }
`
