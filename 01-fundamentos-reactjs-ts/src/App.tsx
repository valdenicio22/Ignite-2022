import { Header } from './components/Header'
import { Input } from './components/Input'

function App() {
  return (
    <div className="bg-slate-400">
      <Header />
      <div className="flex items-center gap-4 max-w-3xl mx-auto ">
        <Input />
        <button>Add</button>
      </div>
    </div>
  )
}

export default App
