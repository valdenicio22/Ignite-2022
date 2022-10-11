import * as S from './styles'
import IgniteSimbol from '../../assets/IgniteSimbol.svg'

export const Header = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ImgWrapper src={IgniteSimbol} alt="Ignite lab logo" />
        <S.Title>Ignite Feed</S.Title>
      </S.Container>
    </S.Wrapper>
  )
}
