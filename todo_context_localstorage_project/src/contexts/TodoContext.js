// import { useContext, createContext } from "react";

// export const TodoContext = createContext({
//     mainTodos: [
//         {
//         id:1,
//         todo: 'Todo Msg',
//         completed: false,
//         }
//     ],
//     addTodo: (todo)=>{},
//     updateTodo: (id, todo)=>{},
//     deleteTodo: (id)=>{},
//     toggleComplete: (id)=>{},

// });

// export const TodoContextProvider = TodoContext.Provider

// export function useTodo(){
//     return useContext(TodoContext);
// }


import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider