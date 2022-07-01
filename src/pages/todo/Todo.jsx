// import { addTodoAction, deleteTodoAction } from "../../redux/Config"

import TodoForm from "../../components/todo/TodoForm";
import TodoList from "../../components/todo/TodoList";
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from "../../redux/fatures/TodoSlice";


function Todo() {

    const reduxstore = useSelector(state => state.todoRed.todos)
    console.log(reduxstore)
    const dispatch = useDispatch()


    const onAddTodo = (task) => {
        // dispatch(addTodoAction(task))
        dispatch(addTodo(task))
    };

    const onDeleteTodo = (index) => {

        dispatch(deleteTodo(index))
    }

    return (
        <div className="text-center py-2 mt-2 container">
            <TodoForm addTodo={onAddTodo} />
            <TodoList todos={reduxstore} deleteTodo={onDeleteTodo} />
        </div>
    );
}

export default Todo;