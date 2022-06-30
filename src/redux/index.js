import { createStore } from "redux";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

export const addTodoAction = (payload) => {
    return {
        type:ADD_TODO,
        payload
    }
}

export const deleteTodoAction = (payload) => {
    return {
        type:DELETE_TODO,
        payload
    }
}


const initialState = {
    todos:[]
}

export const todoReducer = ( state = initialState, action) => {
    
    switch(action.type) {
        
        case ADD_TODO:
            return {...state, todos:[...state.todos, action.payload]}

        case DELETE_TODO:
            return {...state, todos:[...state.todos.filter ((item,index)=> {
                return index !== action.payload
            })]}
        
        default:
            return state;
    }
}




export const store = createStore(
    todoReducer
)

// index !== action.payload