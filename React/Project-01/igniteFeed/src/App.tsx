import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import theme from './styles/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <h1>Hello</h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
