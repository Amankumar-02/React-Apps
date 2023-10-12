import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { useSelector } from 'react-redux'

function App() {
  const storeTodo = useSelector(state=>state.todos)

  return (
    <>
      <h1 className="text-white text-3xl bg-[#3450A1] py-5">
        Todo List Using React Redux-Toolkit
      </h1>
      <div className="bg-[#041955] min-h-screen">
        
        <TodoInput />
        {/* <div className="mt-5 text-white text-xl">Todos</div> */}
        {/* <TodoList/> */}
        {storeTodo.map((todo) => (
          <div key={todo.id}>
            <TodoList appTodo={todo} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App
