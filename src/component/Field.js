import React from 'react'

const Field = ({name, email, index}) => {
    
  return (
      <div key={index} className='inputField'>
                <h2>{name}</h2>
                <h2>{email}</h2>
                <button>-</button>
            </div>
  )
}

export default Field
