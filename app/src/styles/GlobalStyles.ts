import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }

  :root {
    --primary: #36393f;
    --secondary: #2f3136;
    --tertiary: #292b2f;
    --quaternary: #202225;
    --input: #40444b;
    --text: #b9bbbe;
    --text-secondary: #fff;
  }
`
