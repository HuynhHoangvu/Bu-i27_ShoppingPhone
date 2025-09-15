import React, { useState } from 'react'
import Child from './child'
export default function Comunicate() {
    const [user,setUser] = useState("CyberSoft");
    const [age, setAge] = useState(18);
    const handleChangeUser = (name) =>{
      setUser(name);
    };
    const handleReceive = (userReset) =>{
      console.log(userReset)
      setUser(userReset)
    }
    return (
    <div>
      <h1>* Comunicate</h1>
      <p>UserName: {user}</p>
      <p>Age : {age}</p>
      <button type='button' className='text-white bg-blue-700' 
      onClick={() => handleChangeUser("Nguyen")}>Change User</button>
  
      <div className='border w-1/3'>
      <Child userProps={user} ageProps={age} handleReceiveProps = {handleReceive}/>
      </div>
    </div>
  )
}
