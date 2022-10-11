import styled from 'styled-components'
import theme from '../../styles/theme'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.gray800};
  padding: 1.25rem;
  height: 80px;
`

export const Container = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Title = styled.h1`
  color: ${theme.colors.gray100};
  font-size: 1.5rem;
  font-weight: ${theme.font.weight.bold};
`

export const ImgWrapper = styled.img`
  width: 3.3rem;
`
