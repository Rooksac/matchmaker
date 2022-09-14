import React, {useState} from 'react'
import NewAccount from './NewAccount';

export default function SignIn({handleLogIn}) {
    const initialState = {username: '', password: ''}
    const [loginInfo, setLoginInfo] = useState(initialState)
   
    function handleChange(e) {
        let {name, value} = e.target;
        setLoginInfo({...loginInfo, [name]: value})
    }
    function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:9292/login/dater', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginInfo),
            })
        .then((response) => response.json())
        .then((data) => handleLogIn(data))
        setLoginInfo(initialState)
    }
  return (
    <div className="App">
        
        <form  onSubmit = {handleSubmit} className="sign-in-form">
            <label className="sign-in-form">
                Username:
                <input onChange = {handleChange} type="text" name="username" value = {loginInfo.username}/>
            </label>
            <label className="sign-in-form">
                Password:
                <input type ="text" name="password" value = {loginInfo.password} onChange = {handleChange} />
            </label>
            <input type = "submit"/>
        </form>
        
        <NewAccount />
       
        </div>
   
  )
}
