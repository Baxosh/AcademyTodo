import React from 'react';

export default function Footer({data}) {

    console.log(
        data.filter(todo => todo.completed).length
    )

    return (
        <div className="footer is-flex is-justify-content-space-around">
            <p>Tasks: &nbsp;
                {(data) ? data.length : 0}
            </p>
            <p>Completed: &nbsp;
                {data.filter(todo => todo.completed).length}
            </p>
            <p>Open: &nbsp;
                {data.filter(todo => !todo.completed).length}
            </p>
        </div>

    );
}