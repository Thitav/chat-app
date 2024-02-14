import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 95%;
  height: 70px;
  padding: 10px;
  border-radius: 5px;

  :hover {
    background: var(--primary);
    cursor: pointer;
  }
`

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #000;
`

export const UserInfo = styled.div`
  margin-left: 15px;
  color: var(--text);
  > strong {
    font-size: 20px;
  }
  > p {
    margin-top: 5px;
    font-style: italic;
    font-size: 14px;
  }
`

export const Separator = styled.div`
  width: 90%;
  border-radius: 10px;
  border-bottom: 2px solid var(--gray);
  margin: 4px 0 4px 0;
`
