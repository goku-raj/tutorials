import React from 'react'

const Field = ({name, email, index, data, setData}) => {

  function remove(index){
    let arr = data;
    arr.splice(index, 1);
    setData([...arr])
}
  return (
      <div key={index} className='inputField'>
                <h2>{name}</h2>
                <h2>{email}</h2>
                <button onClick={remove}>-</button>
            </div>
  )
}

export default Field
