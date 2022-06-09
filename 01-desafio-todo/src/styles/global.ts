import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  button{
    cursor: pointer;
  }
  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
  ${({ theme }) => css`
    body {
      font-size: ${theme.font.sizes.regular};
      -webkit-font-smoothing: antialiased;
    }
    body,
    input,
    textarea,
    button {
      font-family: ${theme.font.family};
      font-weight: ${theme.font.weight.regular};
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
      font-weight: ${theme.font.weight.bold};
    }
  `}
`
