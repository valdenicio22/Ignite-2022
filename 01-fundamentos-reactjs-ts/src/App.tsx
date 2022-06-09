import { FormEvent, useEffect, useState } from 'react'

import { Header } from './components/Header'
import { Input } from './components/Input'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { Todo } from './types/types'
import { api } from './service/api'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [todo, setTodo] = useState('')
  const [completedCount, setCompletedCount] = useState(0)

  useEffect(() => {
    try {
      api.get<Todo[]>('/todos').then((response) => {
        setTodos(response.data)

        response.data.map(
          (todo) => todo.isCompleted && setCompletedCount((prev) => prev + 1)
        )
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  const handleDeleteClick = async (todoId: Todo['id']) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId)

    let updatedIsCompletedCount = 0
    updatedTodos.forEach(
      (todo) => todo.isCompleted && updatedIsCompletedCount++
    )
    setCompletedCount(updatedIsCompletedCount)

    try {
      await api.delete(`/todos/${todoId}`)
      setTodos(updatedTodos)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmitNewTask = async (e: FormEvent) => {
    e.preventDefault()

    if (!todo) return
    const updatedTodo = {
      id: Math.round(Math.random() * 500),
      description: todo,
      isCompleted: false
    }

    try {
      await api.post('/todos', {
        ...updatedTodo
      })
      setTodos([...todos, updatedTodo])
    } catch (error) {
      console.log(error)
    }
  }

  const handleIsCompletedChange = async (todoId: Todo['id']) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      }
      return todo
    })

    let updatedIsCompletedCount = 0
    updatedTodos.forEach(
      (todo) => todo.isCompleted && updatedIsCompletedCount++
    )
    setCompletedCount(updatedIsCompletedCount)

    try {
      await api.patch(`/todos/${todoId}`, updatedTodos[todoId])
      setTodos(updatedTodos)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="bg-gray-300 h-screen">
      <Header />
      <div className="max-w-3xl mx-auto px-1">
        <form
          onSubmit={handleSubmitNewTask}
          className="flex items-center gap-4 -mt-8"
        >
          <Input todo={todo} setTodo={setTodo} />
          <button
            type="submit"
            className="bg-[#4EA8DE] flex items-center gap-1 p-4 rounded-lg"
          >
            Add <AiOutlinePlusCircle size={20} />
          </button>
        </form>
        <div className="pt-16 pb-8 flex items-center justify-between">
          <div className="flex items-center gap-4 text-[#4EA8DE]">
            <p>Tarefas criadas</p> <span>{todos.length}</span>
          </div>
          <div className="flex items-center gap-4 text-[#5E60CE]">
            <p>Concluídas</p> <span>{completedCount}</span>
          </div>
        </div>
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleDeleteClick={handleDeleteClick}
              handleIsCompletedChange={handleIsCompletedChange}
              setTodos={setTodos}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
