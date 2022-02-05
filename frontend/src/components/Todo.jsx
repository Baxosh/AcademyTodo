import React from 'react';
import axios from "axios";

function Todo({setValue, data, onChange, todo}) {
    async function handleCompleted() {
        await axios.put(`http://localhost:8000/todo/${todo.id}`, {
            completed: !todo.completed,
            title: todo.title
        })
            .then(res => onChange())
            .catch(err => console.log(err))
    }

    async function handleDelete() {
        let confirmation = window.confirm('Do you really want to delete this task?')

        if (confirmation) {
            setValue('')
            await axios.delete('http://127.0.0.1:8000/todo/' + todo.id)
                .then(() => onChange())
                .catch(error => console.log(error))
        }
    }

    async function handleUpdate() {
        setValue(todo.title)
        await axios.put(`http://localhost:8000/todo/${todo.id}`, {
            ...todo,
            status: true,
        })
            .then(res => onChange())
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className='box is-flex is-justify-content-space-around is-align-items-center m-3'>
                <p>{todo.id}</p>
                <p>{todo.title}</p>
                <p>{todo.completed}</p>

                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={handleCompleted}
                    name='completed'/>

                <button onClick={handleDelete} className='button is-danger is-small'>Delete</button>
                <button onClick={handleUpdate} disabled={data.filter((item) => item.status).length !== 0}
                        className='button is-small is-warning'>Update
                </button>
            </div>
        </div>
    )
}

export default Todo