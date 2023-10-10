import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[]
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
        },
        removeTodo : (state, action)=>{
            state.todos = state.todos.filter((prevTodo)=> prevTodo.id !== action.payload)
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer