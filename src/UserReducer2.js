import React from 'react'

const UserReducerEx = () => {
  const [state,dispatch] = UserReducer(reducer,initialState);

  const fetchData = async () => {
dispatch ({type: 'FETCH_DATA_START'});
  }
  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  )
}

export default UserReducerEx
