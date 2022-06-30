const TodoList = ({ todos, deleteTodo }) => {
    const todosList =
        todos && todos.length > 0 ? (
            todos.map((todo, i) => {
                return (
                    <div key={i} className="d-flex justify-content-around align-items-center w-75 mx-auto border">
                        <ul >
                        <li className=" d-flex">
                            <div className="text">
                                <p>Title : {todo.title}</p>
                                <p>Content : {todo.content}</p>
                            </div>
                        </li>
                    </ul>
                    <button className="btn btn-danger" onClick={() => deleteTodo(i)}>X</button>
                    </div>
                );
            })
        ) : (
            <p className="h5 mx-5 text-muted">no items on the list ..</p>
        );

    return (
        <div className="text-left">
            <h5 className="mx-5 text-muted">Todos List</h5>
            {todosList}
        </div>
    );
};

export default TodoList;