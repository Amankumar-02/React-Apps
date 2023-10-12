import { useState } from 'react';
import {removeTodo} from '../features/todo/todoSlice'
import { updateTodo } from '../features/todo/todoSlice';
// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function TodoList({appTodo}){
    const [todoMsg, setTodoMsg] = useState(appTodo.text)
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    // const [bgColor, setBgColor] = useState('#23C366')
    // const [bgColor2, setBgColor2] = useState('green')
    // const storeTodo = useSelector(state=>state.todos)
    const dispatch = useDispatch();
    const deleteBtn = ()=>{
        dispatch(removeTodo(appTodo.id))
    }
    const updateBtn = ()=>{
      // updateTodo(appTodo.id, {...appTodo, todo:todoMsg})
      dispatch(updateTodo({id:appTodo.id, text:todoMsg}))
      setIsTodoEditable(false)
    }
    return (
      <>
        {/* <div className="mt-5">Todos</div> */}
        <ul className="list-none">
        {/* {storeTodo.map((todo)=>( */}
          <li
            className="mt-4 flex justify-between items-center bg-[#CCBED7] px-4 py-2 rounded w-2/4 m-auto"
            key={appTodo.id}
          >
            {/* <div className="text-white">{appTodo.text}</div> */}
            <input 
            // className="text-white bg-transparent" 
            className={`border outline-none w-9/12 bg-transparent rounded-lg py-2 ${
              isTodoEditable ? "border-black/10 px-2" : "border-transparent"
          } ${appTodo.completed ? "line-through" : ""}`}
            type="text" 
            value={todoMsg}
            onChange={(e)=>setTodoMsg(e.target.value)}
            readOnly={!isTodoEditable}
            />
            <div className='flex'>
            <button 
            id='editBtn'
            className = {` text-white border-0 py-1 px-4 bg-green-500 focus:outline-none rounded text-md hover:bg-green-600`}
            // style={{backgroundColor : bgColor}}
            onClick={()=>{
              if(isTodoEditable){
                updateBtn()
              }
              else setIsTodoEditable((prev)=>!prev)
            }}
            // {isTodoEditable ? setBgColor('yellow') : setBgColor('yellow')}
            >
            {isTodoEditable ? (<svg xmlns="http://www.w3.org/2000/svg" fill='white' height="1.5em" viewBox="0 0 576 512"><path d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"/></svg>) : (<svg xmlns="http://www.w3.org/2000/svg" fill='white' height="1.5em" viewBox="0 0 512 512">
              <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg>)}
            </button>
            <button onClick={deleteBtn} className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
            </div>
            
          </li>
          {/* ))} */}
        </ul>
      </>
    );
}

export default TodoList