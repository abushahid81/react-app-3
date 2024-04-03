import React, { useState } from "react";
import datas from "./datas.json";

const Data = () => {

  const [nData, setnData] = useState(datas);

  // const handleClick = () => {
  //   setnDate([])
  // }

  const handleRemove = (itemId) =>{
    setnData(nData.filter(item=> item.id !==itemId))
  }
  const handleUpdate = (itemId) =>{
    setnData(nData.map(items=>{
      if(items.id === itemId){
        return{name:"AbuShahid"}
      }
      else{
        return items;
      }
    }))
  }
  return (
    <div>
      <ul>
        {
        nData.map (items => 
          <li key={items.id}>
            {items.name}
            <br />
            <button onClick={ () => handleUpdate(items.id)}>Update</button>
            <button onClick={ () => handleRemove(items.id)}>Remove</button>
            </li>
        )
        }
      </ul>
      <button onClick={() => setnData([datas])}>Clear</button>
    </div>
  );
};

export default Data;
