import styled from 'styled-components'
import { EmojiEmotions } from 'styled-icons/material'

export const Container = styled.div`
  grid-area: CT;
  display: grid;

  grid-template-rows: auto 64px;
  grid-template-areas: 'MG' 'IP';

  background: var(--primary);
`

export const Messages = styled.div`
  grid-area: MG;

  padding: 10px 0;
  display: flex;
  flex-direction: column;
  max-height: calc(90vh - 64px);
  overflow-y: scroll;
  color: var(--text);

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--quaternary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--primary);
  }
`

export const InputWrapper = styled.form`
  grid-area: IP;

  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 16px;
`

export const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 10px 0 25px;
  border-radius: 7px;
  background: var(--input);
  position: relative;
  color: var(--text-secondary);
`

export const EmoteIcon = styled(EmojiEmotions)`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  color: var(--text);
`
