import React, {useEffect, useState} from 'react';
import {Days, Months} from "../App";

export default function Header() {
    const [time, setTime] = useState('afternoon')
    const date = new Date()
    let hours = date.getHours()

    useEffect(() => {
        if (hours > 20 || hours < 7) {
            setTime('night')
        } else {
            setTime('afternoon')
        }
    }, [hours])
    return (
        <div
            className={`date ${time} top is-flex is-flex-direction-column is-align-items-center is-justify-content-center`}>
            <p>{Days[date.getDay()]}</p>
            <p>{date.getDate()}-{Months[date.getMonth()]}</p>
            <p>{time}</p>
            <p>{`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</p>
        </div>
    );
}