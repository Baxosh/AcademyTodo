import React, {useEffect, useState} from 'react';
import Todos from "./components/Todos";
import Form from "./components/Form";
import Footer from "./components/Footer"
import axios from "axios"
import Header from "./components/Header";

export const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
export const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


export default function App() {
    const [value, setValue] = useState('')
    const [data, setData] = useState([])

    useEffect(() => load(), [])

    function load() {
        axios.get('http://localhost:8000/todo')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div className='box1 is-center'>
            <Header />
            <Form setData={setData} onChange={load} data={data} value={value} setValue={setValue}/>
            <Todos
                onChange={load}
                data={data}
                setData={setData}
                value={value}
                setValue={setValue}/>

            <Footer data={data} setData={setData}/>
        </div>
    );
}
