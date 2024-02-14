import styled from 'styled-components'
import { Settings } from 'styled-icons/material'

export const Container = styled.div`
  grid-area: UI;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: var(--quaternary);
  color: var(--text-secondary);
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

export const Icons = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`

export const SettingsIcon = styled(Settings)`
  width: 40px;
  height: 40px;
  color: var(--text);
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`
