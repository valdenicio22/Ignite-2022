import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import Sidebar from './components/SideBar'
import { GlobalStyle } from './styles/global'
import theme from './styles/theme'
import * as S from './styles/App.styles'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <S.Main>
        <Sidebar />
        <div>Posts spot</div>
      </S.Main>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
