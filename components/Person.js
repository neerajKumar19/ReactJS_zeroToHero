import React from 'react'

function Person({ person }) {
    return (
        <div>
            I am {person.name}. I am {person.age}. I am {person.course} developer.
        </div>
    )
}

export default Person
