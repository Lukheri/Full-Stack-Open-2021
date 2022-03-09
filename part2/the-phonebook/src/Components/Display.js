import React from 'react'
import Name from './Name'

const Display = ({ persons, filter }) => {
    return(
        <ul>
            {persons.map((person)=> <Name key={person.id} name={person.name} 
            number={person.number} filter={filter}/>)} 
        </ul>
    )
}

export default Display