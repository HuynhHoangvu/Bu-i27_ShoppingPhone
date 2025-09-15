import React, { useState } from 'react'

export default function HandlingEvent() {
    const [count,setCount] = useState(0);
    const handlingClick = () =>{
        setCount(count + 1)
        console.log(count + 1)
    }
    const handleClickParams = (user,age) => {
        console.log(user,age)
    }
  return (
    <div>
      <h1>Handling Event</h1>
      <button onClick={handlingClick}>Click</button>
      <button onClick={() => handleClickParams("Vu", 20)}> Click Params </button>
    </div>
  )
}
