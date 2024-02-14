import styled from 'styled-components'

export const Container = styled.div`
  grid-area: FL;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--tertiary);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--quaternary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--tertiary);
  }
`
