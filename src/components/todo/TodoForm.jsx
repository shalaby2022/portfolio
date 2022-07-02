import { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmission = (e) => {
        e.preventDefault();
        addTodo({ title, content });
        setTitle("");
        setContent("");
    };

    return (
        <div className="border rounded rounded-secondary bg-secondary w-50 mx-auto">
            <div className="px-5 ">
            <h3 className="text-info mb-4 fw-bold">Add a TODO</h3>

            <form onSubmit={handleSubmission}>
                <label htmlFor="text" className="text-danger fs-4 fw-bold">ToDo title</label>
                <input
                    id="text"
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control"
                />
                <br />
                <label htmlFor="content" className="text-danger fs-4 fw-bold">ToDo Content</label>
                <textarea
                    id="content"
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="form-control"
                ></textarea>
                <br />
                <button className="my-4 btn btn-primary btn-sm px-4" type="submit">
                    Add Todo
                </button>
            </form>
            </div>
        </div>
    );
};

export default TodoForm;