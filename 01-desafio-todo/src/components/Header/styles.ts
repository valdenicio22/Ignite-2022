import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray700};
    width: 100%;
    height: 12.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`
export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.containers.desktop};
    width: 100%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  `}
`

export const todo = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
    font-size: ${theme.font.sizes.xlarge};

    span {
      color: ${theme.colors.purple};
    }
  `}
`
