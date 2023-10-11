import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { useSelector } from 'react-redux'

function App() {
  const storeTodo = useSelector(state=>state.todos)

  return (
    <>
    <h1 className='text-white text-3xl'>Todo List Using React Redux-Toolkit</h1>
    <TodoInput/>
    <div className="mt-5 text-white text-xl">Todos</div>
    {/* <TodoList/> */}
    {storeTodo.map((todo)=>(
      <div key={todo.id}>
        <TodoList appTodo = {todo}/>
      </div>
    ))}
    </>
  )
}

export default App
