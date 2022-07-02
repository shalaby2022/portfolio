const TodoList = ({ todos, deleteTodo }) => {
    const todosList =
        todos && todos.length > 0 ? (
            todos.map((todo, i) => {
                return (
                    <div key={i} className="d-flex justify-content-around align-items-center w-50 mx-auto border bg-light m-4">
                        <ul >
                        <li className=" d-flex">
                            <div className="text-primary py-2 fs-5 fw-bold">
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
            <p className="h5 mx-5 text-success fs-5 fw-bold">no items on the list ..</p>
        );

    return (
        <div className="text-left">
            <h5 className="m-5 text-success fs-3 fw-bold">Todos List</h5>
            {todosList}
        </div>
    );
};

export default TodoList;