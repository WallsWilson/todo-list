import React, { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
    const INITIAL_STATE = {
        task:''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { task, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [task]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({ ...formData });
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task</label>
            <input
                id="id"
                type="text"
                name="task"
                placeholder="Task"
                value={formData.task}
                onChange={handleChange}
                />
                <button>Add Task</button>
        </form>
    )
}

export default NewTodoForm;