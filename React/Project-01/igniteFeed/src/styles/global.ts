import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${theme.colors.gray900};
    color: ${theme.colors.gray300};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button { 
    font-family: ${theme.font.family}, sans-serif;
    font-weight: ${theme.font.weight.regular};
    font-size: 1rem;
  }
  :focus {
    outline: transparent;
    box-shadow: 0 0 0 2px ${theme.colors.green500};
  }
`
