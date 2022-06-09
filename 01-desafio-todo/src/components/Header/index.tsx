import * as S from './styles'
import rocketIcon from '../../assets/rocket.svg'

export const Header = () => {
  return (
    <S.Wrapper>
      <S.HeaderContainer>
        <img src={rocketIcon} alt="rocket icon" />
        <S.todo>
          to<span>do</span>
        </S.todo>
      </S.HeaderContainer>
    </S.Wrapper>
  )
}
