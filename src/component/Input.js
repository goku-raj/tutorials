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
                            <Field name={element.name} email={element.email} key={index} data={data} setData={setData}/>
                    )})
                }
            </div>
        </>
    )
}

export default Input
