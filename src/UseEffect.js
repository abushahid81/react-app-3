import React, {useEffect, useState } from 'react'

const UseEffect = () => {
    
    const [clicked, setClicked] = useState();
    const [count, setCount] = useState(0);



    useEffect(()=>{
        alert("My First React Code")
    },[clicked])


  return (
    <div>
      <button onClick={()=>setClicked('Subscribe')}>Subscribe</button>
      <br/>
      <hr/>
      <button onClick={()=>setClicked('To')}>To</button>
      <br/>
      <hr/>
      <button onClick={()=>setClicked('Xlegend')}>Xlegend</button>
      <br/>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
      <br/>
      <button onClick={()=>{setCount(count-1)}}>Increment</button>
      <h1>{clicked}</h1>
      <h1>{count}</h1>
    </div>
  )
}

export default UseEffect
