import React from 'react'

function IndexAsKey() {
    const names = ["Titus", "Neeraj", "Rahul", "Sanjay"];

    const nameList = names.map((name, index) =>
        <h2 key={index}>{index} {name}</h2>
    )
    return (
        <div>
            <h1>Hello Key</h1>
            {nameList}
        </div>
    )
}

export default IndexAsKey;
