import { TextField } from './components/TextField'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import { Header } from './components/Header'
import { GlobalStyles } from './styles/global'
import { useState, FormEvent } from 'react'

function App() {
  const [todo, setTodo] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    console.log()
  }

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <form onSubmit={handleSubmit}>
        <TextField todo={todo} setTodo={setTodo} />
      </form>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
