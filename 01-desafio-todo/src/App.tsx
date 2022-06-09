import Input from './components/Input'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Input />
    </ThemeProvider>
  )
}

export default App
