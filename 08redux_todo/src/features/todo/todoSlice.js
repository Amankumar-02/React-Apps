import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: localStorage.getItem('todos')? JSON.parse(localStorage.getItem('todos')) : []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo : (state, action)=>{
            const newTodo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.unshift(newTodo)
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        removeTodo : (state, action)=>{
            state.todos = state.todos.filter((prevTodo)=> prevTodo.id !== action.payload)
            localStorage.setItem('todos', JSON.stringify(state.todos))
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer