import React, { useReducer } from "react";


const reducer = (state, action) => {
  if (action.type === 'incr') {
    return {count: state.count + 1}
  } 
  else if(action.type === 'decr') {
    return {count: state.count - 1}
  } 
  else{
    throw new Error('Unsupported action')
  }
};


function Counter() {
//   const [count, setCount] = useState(0);
//   console.log(count);
//   console.log(setCount);

const [state, dispatch] = useReducer(reducer, { count: 0});

// reducer(coffee maker) function
// it id pure function
// state(coffee powder) and action (water)
// new state (coffee)

// pure function
// 10 +10 = 20
// no side effect

  const handleClickInc = () => {
   dispatch({type:"incr"});
  };
  const handleClickDec = () => {
    dispatch({type:"decr"});
  };
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleClickInc}>+</button>
      <button onClick={handleClickDec}>-</button>
    </div>
  );
}

export default Counter;