import React from 'react'

const Name = ({ contact , filter, deleteContact }) =>{
    if (contact.name.toLowerCase().includes(filter.toLowerCase())){
        return(
            <div>
                <li> {contact.name} {contact.number} <button onClick={deleteContact}>delete</button></li>
                
            </div>

        )
    }
    return(
        <></>
    )
}

  export default Name