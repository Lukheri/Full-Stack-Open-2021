import React from 'react'

const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
    
    return (
      <div className='error' style={message[1]}>
        {message[0]}
      </div>
    )
  }

export default Notification