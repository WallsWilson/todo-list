import React, {useState} from "react";
import {v4 as uuid } from 'uuid';
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const ToDoList = () => {

    const INITIAL_STATE = [
        { id: uuid(), task:'Trash' },
        { id: uuid(), task:'Dishes' 
    }
    ]
    
    const [todo, setTodo] = useStateq(INITIAL_STATE);
    const addTodo = (newTodo) => {
        setTodo(todo => [...todo, {...newTodo, id: uuid() }])
    }
    return (
        <div>
            <h1>Todo List</h1>
            <NewTodoForm addTodo={addTodo} />
            <div>
                {todo.map(({ id, task }) => <Todo id={id} task={task} key={id} />)} 
            </div>
        </div>
    )
}

export default ToDoList;