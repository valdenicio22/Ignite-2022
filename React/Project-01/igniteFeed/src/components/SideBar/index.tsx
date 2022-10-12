import * as S from './styles'
import { PencilSimpleLine } from 'phosphor-react'

const Sidebar = () => {
  return (
    <S.Wrapper>
      <S.Cover
        src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
        alt="Unsplash programming photo"
      ></S.Cover>

      <S.Profile>
        <S.Avatar
          src="https://avatars.githubusercontent.com/u/40251933?v=4"
          alt="My profile picture"
        ></S.Avatar>
        <S.Name>Valdenício Ferreira</S.Name>
        <S.Profession>Web Developer</S.Profession>
      </S.Profile>

      <S.Footer>
        <S.Button>
          <PencilSimpleLine size={20} /> Editar seu perfil
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default Sidebar
