import Input from './components/Input'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import { Header } from './components/Header'
import { GlobalStyles } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
