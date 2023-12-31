import { useState } from 'react';
import {addTodo} from '../features/todo/todoSlice'
import { useDispatch } from 'react-redux';

function TodoInput(){
    let [input, setInput] = useState('')
    let dispatch = useDispatch()
    const submit = (e)=>{
        e.preventDefault()
        // dispatch(addTodo(input))
        if(!input) return
        dispatch(addTodo(input))
        setInput('')
    }
    return (
      <>
      <div className='pt-12 text-white text-2xl font-bold'>Manage Your Tasks 2.0</div>
        <form onSubmit={submit} className="space-x-3 mt-6">
          <input
            type="text"
            className="bg-[#455368] rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-2/4"
            placeholder="Enter a Todo..."
            value={input}
            onChange={(e)=>{setInput(e.target.value)}}
          />
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Add Todo
          </button>
        </form>
      </>
    );
}

export default TodoInput