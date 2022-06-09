import { Todo } from '../../types/types'
import { HiOutlineTrash } from 'react-icons/hi'
import { AiOutlineEdit } from 'react-icons/ai'

type TodoItemProps = {
  todo: Todo
  handleIsCompletedChange: (todoId: Todo['id']) => Promise<void>
  handleDeleteClick: (todoId: Todo['id']) => Promise<void>
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoItem = ({
  todo,
  handleIsCompletedChange,
  handleDeleteClick,
  setTodos
}: TodoItemProps) => {
  const handleEditClick = async (todoId: Todo['id']) => {}

  return (
    <li
      key={todo.id}
      className="flex items-center justify-between w-full gap-3 p-4 bg-gray-400 text-white mb-4 rounded-lg"
    >
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => handleIsCompletedChange(todo.id)}
      />
      <p>{todo.description}</p>
      <div className="flex items-center gap-4">
        <AiOutlineEdit
          size={20}
          role="button"
          onClick={() => handleEditClick(todo.id)}
          className="hover:text-[#5e60CE]"
        />
        <HiOutlineTrash
          size={20}
          role="button"
          onClick={() => handleDeleteClick(todo.id)}
          className=" hover:text-[#5E60CE]"
        />
      </div>
    </li>
  )
}

export default TodoItem
