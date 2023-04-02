import React from "react";

const Todo = ({ id, task }) => {
    return (
        <ul>
            <li>Todo: {task}</li>
        </ul>
    )
}

export default Todo;