import React, { useState } from 'react'


const Form2 = () => {
// long code form
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    
// long code form

    // const handleName = (abu) =>{
    //     console.log(abu.target.value);
    //     setName(abu.target.value);
    // }
    // const handleEmail = (abu) =>{
    //     console.log(abu.target.value);
    //     setEmail(abu.target.value);
    // }
    // const handlePassword = (abu) =>{
    //     console.log(abu.target.value);
    //     setPassword(abu.target.value);
    // }



    const [formData, setFormData] = useState({
        name : '',
        email : '',
        password : ''
     });

    const handleInput = (abu) =>{
        const {name, value} = abu.target
        setFormData({...formData,[name]:value})
    }

    const handleSubmit = (abu) =>{
        abu.preventDefault();
    }
  return (
   <form onSubmit={handleSubmit}>
    <label >
        Name: <input type="text" name='name' value={formData.name} onChange={handleInput}/>
    </label>
    <label >
        Email: <input type="text" name='email'  value={formData.email} onChange={handleInput}/>
    </label>
    <label >
        Password: <input type="password" name='password' value={formData.password} onChange={handleInput}/>
    </label>
   <button type='submit'>Submit</button>
   </form>
  )
}

export default Form2