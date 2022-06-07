import { FormEvent, useEffect, useState } from 'react'

import { Header } from './components/Header'
import { Input } from './components/Input'
import { AiOutlinePlusCircle, AiOutlineEdit } from 'react-icons/ai'
import { HiOutlineTrash } from 'react-icons/hi'
import { Todo } from './types/types'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    try {
      fetch('http://localhost:3004/todos')
        .then((response) => response.json())
        .then((data) => setTodos(data))
    } catch (error) {
      console.log(error)
    }
  }, [])

  const updateTodos = async (updatedTodos: Todo[]) => {
    try {
      await fetch('http://localhost:3004/todos', {
        method: 'POST',
        body: JSON.stringify(updatedTodos)
      })
      setTodos(updatedTodos)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteClick = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    id: Todo['id']
  ) => {
    e.preventDefault()

    const updatedTodos = todos.filter((todo) => todo.id !== id)
    updateTodos(updatedTodos)
  }

  const handleSubmitNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className="bg-gray-300 h-screesn">
      <Header />
      <div className="max-w-3xl mx-auto px-1">
        <form
          onSubmit={handleSubmitNewTask}
          className="flex items-center gap-4 -mt-8"
        >
          <Input />
          <button
            type="submit"
            className="bg-[#4EA8DE] flex items-center gap-1 p-4 rounded-lg"
          >
            Add <AiOutlinePlusCircle size={20} />
          </button>
        </form>
        <div className="pt-16 pb-8 flex items-center justify-between">
          <div className="flex items-center gap-4 text-[#4EA8DE]">
            <p>Tarefas criadas</p> <span>0</span>
          </div>
          <div className="flex items-center gap-4 text-[#5E60CE]">
            <p>Concluídas</p> <span>0</span>
          </div>
        </div>
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between w-full gap-3 p-4 bg-gray-400 text-white mb-4 rounded-lg"
            >
              <input type="checkbox" checked={todo.isCompleted} />
              <p>{todo.description}</p>
              <div className="flex items-center gap-4">
                <AiOutlineEdit size={20} />
                <HiOutlineTrash
                  size={20}
                  role="button"
                  onClick={(e) => handleDeleteClick(e, todo.id)}
                  className=" hover:text-[#5E60CE]"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
