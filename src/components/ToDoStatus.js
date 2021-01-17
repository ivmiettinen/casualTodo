import React from 'react'

const ToDoStatus = ({ todo, handleCompletion, handleDelete }) => {
    let color
    let text
    let textDecoration
    let completeButton

    if (todo.complete === true) {
        color = 'lightgreen'
        text = 'Complete'
        textDecoration = 'line-through'
        completeButton = 'lightgreen'
    } else {
        color = 'lightblue'
        text = 'Incomplete'
        textDecoration = ''
    }

    return (
        <table>
            <tbody>
                <tr className='toDoStatusWrapper'>
                    <td
                        className='todoName'
                        style={{
                            textDecoration: textDecoration,
                            borderRadius: 10,
                            backgroundColor: color,
                            justifyContent: 'center',
                            textAlign: 'center', 
                            fontWeight: 'bold'
                        }}
                    >
                        {todo.name}
                    </td>
                    <td>
                        <button
                            className='btnCompletion'
                            style={{ backgroundColor: completeButton }}
                            onClick={() => handleCompletion(todo.id)}
                        >
                            {text}
                        </button>
                    </td>
                    <td>
                        <button
                            className='btnDelete'
                            onClick={() => handleDelete(todo.id)}
                        >
                            Remove
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default ToDoStatus
