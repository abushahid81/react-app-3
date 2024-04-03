import React, { useState } from 'react'
import "./Forms.css"

const Forms = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleName = (abu) =>{
        console.log(abu.target.value);
        setName(abu.target.value);
    }
    const handleEmail = (abu) =>{
        console.log(abu.target.value);
        setEmail(abu.target.value);
    }
    const handlePassword = (abu) =>{
        console.log(abu.target.value);
        setPassword(abu.target.value);
    }
  return (
   <form>
    <label >
        Name: <input type="text" value={name} onChange={handleName}/>
    </label>
    <label >
        Email: <input type="text" value={email} onChange={handleEmail}/>
    </label>
    <label >
        Password: <input type="number" value={password} onChange={handlePassword}/>
    </label>
   
   </form>
  )
}

export default Forms
