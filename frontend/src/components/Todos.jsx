import React from 'react';
import Todo from "./Todo";

function Todos({status, setStatus, onChange, data, setData, value, setValue}) {
    return  (
        data.map((item) => (
            <Todo
                data={data}
                key={item.id}
                onChange={onChange}
                todo={item}
                setData={setData}
                value={value}
                setValue={setValue}/>
        ))
    )
}

export default Todos