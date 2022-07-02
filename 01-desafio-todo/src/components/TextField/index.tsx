import * as S from './styles'
import {
  InputHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction
} from 'react'

type InputProps = {
  setTodo: React.Dispatch<React.SetStateAction<string>>
  todo: string
} & InputHTMLAttributes<HTMLInputElement>

const InputComponent: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { setTodo, todo, ...props }: InputProps,
  ref
) => {
  return (
    <S.Wrapper>
      <S.Input
        placeholder="Adicione uma nova tarefa"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        ref={ref}
        {...props}
      />
    </S.Wrapper>
  )
}

export const TextField = forwardRef(InputComponent)
