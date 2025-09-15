import React, { useState } from 'react'


export default function ListKey() {
    const [userList,setUserList] = useState([
        {id:1,name:"Huynh",age:20},
        {id:2,name:"Hoang",age:21},
        {id:3,name:"Vu",age:22},
    ]);

    const renderUserList = () => {
       return userList.map((user) => {
                return <li key={user.id}>{user.name} - {user.age} </li>
        })
    }
  return (
    <div>
      <h1>* List KEY</h1>
      <ul>
        {/* {
            userList.map((user) => {
                return <li key={user.id}>{user.name} - {user.age} </li>
            })
        } */
        }
        {renderUserList()}
      </ul>
    </div>
  )
}
