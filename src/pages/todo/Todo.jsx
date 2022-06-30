// import { useState } from "react";
import TodoForm from "../../components/todo/TodoForm";
import TodoList from "../../components/todo/TodoList";
import { useSelector, useDispatch } from 'react-redux'
import { addTodoAction, deleteTodoAction } from "../../redux";



function Todo() {

    const reduxstore = useSelector(state => state.todos)
    // console.log(reduxstore)

    const dispatch = useDispatch()

    // const [todos, setTodos] = useState([
    //     {
    //         title: "learn node js",
    //         content: "Lorem ipsum dolor sit amet.",
    //     },
    //     {
    //         title: "go to the sea",
    //         content: "Lorem ipsum dolor sit amet.",
    //     },
    //     {
    //         title: "walk the dog",
    //         content: "Lorem ipsum dolor sit amet.",
    //     },
    // ]);

    const addTodo = (task) => {
        dispatch(addTodoAction(task))
    };

    const deleteTodo = (index) => {
        dispatch(deleteTodoAction(index))
    }

    return (
        <div className="text-center py-2 mt-2 container">
            <TodoForm addTodo={addTodo} />
            <TodoList todos={reduxstore} deleteTodo={deleteTodo} />
        </div>
    );
}

export default Todo;