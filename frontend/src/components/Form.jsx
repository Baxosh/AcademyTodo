import React, {useEffect} from 'react'
import axios from "axios";


function Form({data, onChange, value, setValue}) {
    useEffect(() => {
        localStorage.setItem("frontend", JSON.stringify(data))
    }, [data])

    async function handleSubmit(e) {
        e.preventDefault()
        let update = data.filter((item) => item.status ? item : null)[0]

        if (update) {
            setValue('')
            await axios.put(`http://localhost:8000/todo/${update.id}`, {
                title: value,
                status: false,
            })
                .then(res => onChange())
                .catch(err => console.log(err))
            return
        }

        if (!update && value && data.length < 6) {
            let newData = {
                id: data.length > 0 ? data[data.length - 1].id + 1 : 1,
                title: value,
                completed: false,
                status: false,
            }

            await axios.post('http://localhost:8000/todo', newData)
                .then(res => onChange())
                .catch(err => console.log(err))
            setValue('')
            return
        }

        alert('You can not add Todo more than 6 todo 😅😅😅')
    }

    return (
        <div className="container">
            <p className='text'>What's the plan for today?</p>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <input
                    className="input is-primary"
                    type="text"
                    name="todo"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    placeholder="Enter tasks"/>
                <button className="button is-info">
                    {
                        data.map((item) => item.status)[0] ? 'Update' : 'Add'
                    }
                </button>
            </form>
        </div>
    );
}

export default Form