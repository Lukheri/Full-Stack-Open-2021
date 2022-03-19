import React from 'react'
import Name from './Name'

const Display = ({ persons, filter, deleteContact }) => {
    return(
        <ul>
            {persons.map((person)=> <Name key={person.id} contact={person} filter={filter} 
            deleteContact={() => deleteContact(person.id, person.name)} />)} 
        </ul>
    )        

}

export default Display