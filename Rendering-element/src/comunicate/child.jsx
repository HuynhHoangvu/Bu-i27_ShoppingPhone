import React from 'react'

export default function Child(props) {
  const handleResetUser = () => {
    const userReset = "CyberSoft";
    props.handleReceiveProps(userReset)
  }
  return (
    <div>
      <h1>* Child</h1>
      <p>Username:{props.userProps}</p>
      <p>Age:{props.ageProps}</p>
      <button type='button'
      className='text-white bg-red-700' onClick={()=>handleResetUser()}>
        reset
      </button>
    </div>
  )
}
