import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray500};
    border-radius: ${theme.border.radius.medium};
    padding: 1rem;
    width: 100%;
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 100%;
    outline: none;

    &::placeholder {
      color: ${theme.colors.gray300};
    }
  `}
`
