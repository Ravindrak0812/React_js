import React,{useState,useContext} from 'react'
import UserContext from '../Context/UserContext'

export default function Login() {

  const  [username,setUsername]  = useState('')
  const  [password,setPassword]  = useState('')

  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
  e.preventDefault()
  setUser({username,password})
}

  return (
    <div>
      <h2>Login</h2>
      <input 
      value={username}
      onChange={(e) => setUsername(e.target.value) }
      type='text'
      placeholder='Username'
      />
      {"      "}
      <input 
      value={password}
      onChange={(e) => setPassword(e.target.value) }
      type='text'
      placeholder='password'
      />
      <button 
      onClick={handleSubmit}>
      Submit
    </button>
    </div>
  )
}
