import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const ToDoForm = ({ addNewTodo }) => {
    const [newTodoName, setTodoName] = useState('')

    const addNewTodo1 = (e) => {
        e.preventDefault()

        addNewTodo(newTodoName)

        setTodoName('')
    }

    const handleTodoNameChange = (e) => {
        setTodoName(e.target.value)
    }

    return (
        <div>
            <form className='toDoFormWrapper' onSubmit={addNewTodo1}>
                <input
                    placeholder='Add new todo'
                    value={newTodoName}
                    onChange={handleTodoNameChange}
                />
                <button className='btn-success' type='submit' value='Submit'>
                    Add
                </button>
            </form>
        </div>
    )
}

export default ToDoForm
