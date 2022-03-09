import React from 'react'

const Name = ({ name, number, filter }) =>{
    if (name.toLowerCase().includes(filter.toLowerCase())){
        return(
            <li> {name} {number} </li>
        )
    }
    return(
        <></>
    )
}

  export default Name