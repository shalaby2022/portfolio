import TodoForm from "../../components/todo/TodoForm";
import TodoList from "../../components/todo/TodoList";
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from "../../redux/fatures/TodoSlice";


function Todo() {

    const reduxstore = useSelector(state => state.todoRed.todos)
    const dispatch = useDispatch()


    const onAddTodo = (task) => {
        dispatch(addTodo(task))
    };

    const onDeleteTodo = (index) => {

        dispatch(deleteTodo(index))
    }

    return (
        <div className="bg-dark pt-5" style={{height: '89.1vh'}}>
            <div className="text-center bg-dark pb-2">
                <TodoForm addTodo={onAddTodo} />
                <TodoList todos={reduxstore} deleteTodo={onDeleteTodo} />
            </div>
        </div>
    );
}

export default Todo;