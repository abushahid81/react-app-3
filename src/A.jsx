import React, { createContext } from 'react'
import B from "./B.jsx"


const GreetContext = createContext();

export default function A() {
    
    const greet = "Hello"
    
  return (
    <div>
        <GreetContext.Provider value={greet}>
        <B />
        </GreetContext.Provider>
        
    </div>
  )
}


export {GreetContext};