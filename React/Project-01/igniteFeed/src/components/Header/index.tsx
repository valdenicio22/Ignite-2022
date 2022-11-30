import * as S from './styles'
import igniteSimbol from '../../assets/IgniteSimbol.svg'

export const Header = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ImgWrapper src={igniteSimbol} alt="Ignite lab logo" />
        <S.Title>Ignite Feed</S.Title>
      </S.Container>
    </S.Wrapper>
  )
}
