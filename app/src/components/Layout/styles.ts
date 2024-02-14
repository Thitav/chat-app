import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  height: 100vh;

  grid-template-columns: 25% auto;
  grid-template-rows: 10% auto;
  grid-template-areas: 'UI FI' 'FL CT';
`
