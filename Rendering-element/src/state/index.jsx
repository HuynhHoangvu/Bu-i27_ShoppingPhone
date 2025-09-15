import {useState} from "react"
export default function StateComponent() {
    const [isLogin,setIsLogin] = useState(false)
    const handleLogin = () =>{
        setIsLogin(true)
    }
    const handleLogout = () =>{
                setIsLogin(false)
    }
    const renderUI = () => {
        if(isLogin) {
            return (<>
          <h3>Vui long Login</h3>
          <button onClick={handleLogout}>Login</button>
        </>)
        }
        else {
            return (<>
          <h3>Xin chao user</h3>
          <button onClick={handleLogin}>Log out</button>
        </>)
        }
    }

  return (
    <div>
      <h1>State Component</h1>
      {renderUI()}
      {/* {isLogin ? (
        <>
          <h3>Vui long Login</h3>
          <button>Login</button>
        </>
      ) : (
        <>
          <h3>Xin chao user</h3>
          <button>Log out</button>
        </>
      )} */}
    </div>
  );
}
