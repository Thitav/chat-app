import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 45%;
  font-size: 18px;
  margin: 5px 10px 5px 10px;

  > strong {
    margin-left: 10px;
    font-size: 15px;
  }
`

export const Frame = styled.div`
  height: 100%;
  background: var(--tertiary);
  border-radius: 10px;
  padding: 10px;
  word-wrap: break-word;

  > p {
    float: right;
    font-size: 11px;
    margin-top: 25px;
  }
`
