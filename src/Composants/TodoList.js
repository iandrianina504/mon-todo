import React from 'react';
import { useState } from 'react';
import TodoInput from './TodoInput';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);
    
    const addTodo = todo => {
        if(!todo.text){
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(...todos); 
        
    }

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text){
            return;
        }

        setTodos( prev => prev.map(item => item.id === todoId ? newValue : item))
    }
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    }

    
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id===id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
        setTodos(updatedTodos);
    }
    return(
        <div>
            <h1>Todo List</h1>
            <TodoInput onSubmit={addTodo}/>
            <Todo
            todos={todos}
            completeTodo={completeTodo}
            removeTodo = {removeTodo}
            updateTodo = {updateTodo}/>

        </div>

    )
}

export default TodoList;