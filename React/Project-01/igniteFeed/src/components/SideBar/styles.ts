import styled from 'styled-components'
import theme from '../../styles/theme'

export const Wrapper = styled.aside`
  width: 100%;
  background-color: ${theme.colors.gray800};
  border-radius: 8px;
  overflow: hidden;
`
export const Cover = styled.img`
  width: 100%;
  height: 72px;
  object-fit: cover;
`
export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 0 1rem 1.5rem;
  border-bottom: 1px solid ${theme.colors.gray600};
  margin-top: -2rem;
`

export const Avatar = styled.img`
  width: calc(3rem + 12px);
  height: calc(3rem + 12px);
  border-radius: 8px;
  border: 4px solid ${theme.colors.gray800};
  outline: 2px solid ${theme.colors.green300};
`

export const Name = styled.strong`
  margin-top: 1rem;
  color: ${theme.colors.gray100};
  line-height: 1.6;
`

export const Profession = styled.span`
  font-size: 0.875rem;
  color: ${theme.colors.gray400};
  line-height: 1.6;
`

export const Footer = styled.div`
  padding: 1.5rem 2rem 2rem;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 0.5rem;
  cursor: pointer;

  height: 50px;
  color: ${theme.colors.green300};
  background-color: transparent;
  border: 1px solid ${theme.colors.green300};
  padding: 1rem 1.5rem;
  border-radius: 8px;
  transition: color 0.15s, background-color 0.15s;

  &:hover {
    background-color: ${theme.colors.green500};
    color: ${theme.colors.gray100};
  }
`
