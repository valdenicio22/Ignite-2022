import { Header } from './components/Header'
import { Input } from './components/Input'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { HiOutlineTrash } from 'react-icons/hi'

function App() {
  return (
    <div className="bg-gray-300 h-screen">
      <Header />
      <div className="max-w-3xl mx-auto px-1">
        <div className="flex items-center gap-4 -mt-8">
          <Input />
          <button className="bg-[#4EA8DE] flex items-center gap-1 p-4 rounded-lg">
            Add <AiOutlinePlusCircle size={20} />
          </button>
        </div>
        <div className="pt-16 pb-8 flex items-center justify-between">
          <div className="flex items-center gap-4 text-[#4EA8DE]">
            <p>Tarefas criadas</p> <span>0</span>
          </div>
          <div className="flex items-center gap-4 text-[#5E60CE]">
            <p>Concluídas</p> <span>0</span>
          </div>
        </div>
        <ul>
          <li className="flex items-center justify-between w-full gap-3 p-4 bg-gray-400 text-white mb-4 rounded-lg">
            <input type="checkbox" />
            <p>
              Integer uma interdum massa libero auctor neque turpis turpis
              semper. Duis vel sed fames integer.
            </p>
            <HiOutlineTrash size={20} />
          </li>
          <li className="flex items-center justify-between w-full gap-3 p-4 bg-gray-400 text-white mb-4 rounded-lg">
            <input type="checkbox" />
            <p>
              Integer uma interdum massa libero auctor neque turpis turpis
              semper. Duis vel sed fames integer.
            </p>
            <HiOutlineTrash size={20} />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App
