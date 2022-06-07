type InputProps = {
  setTodo: React.Dispatch<React.SetStateAction<string>>
  todo: string
}

export const Input = ({ setTodo, todo, ...rest }: InputProps) => {
  return (
    <input
      type="text"
      placeholder="Add a new Task"
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      {...rest}
      className="bg-gray-500 p-4 rounded-lg w-full"
    />
  )
}
