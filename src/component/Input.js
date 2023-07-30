import React, { useState } from 'react'
import Field from './Field';

const Input = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [data, setData] = useState([]);

    function addData() {
        if (!name || !email) { return alert('Please fill all fields') }
        setData([...data, { name, email }])
        setName('');
        setEmail('');
    }
    function remove(index){
        let arr = data;
        arr.splice(index, 1);
        setData([...arr])
    }

    return (
        <>
            <div className='input'>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder='name' />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder='email' />
                <button
                    onClick={addData}
                >Add</button>
            </div>
            <div className='data'>
                {
                    data.map((element, index) => {
                        return (
                            <div key={index} className='inputField'>
                                <h2>{element.name}</h2>
                                <h2>{element.email}</h2>
                                <button onClick={()=> remove(index)}>-</button>
                            </div>
                    )})
                }
            </div>
        </>
    )
}

export default Input
