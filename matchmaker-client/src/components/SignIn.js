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
        fetch('http://localhost:9292/login/matchmaker', {
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
        <div className="sign-in-form">
         <div className="signin">  
         {/* <h1 className='matchmakertitle'>Matchmaker</h1> */}
        <form  onSubmit = {handleSubmit}>
            <label className="sign-in-form">
                Username: </label>
                <input className="signin-box" onChange = {handleChange} type="text" name="username" value = {loginInfo.username}/>
            
            <label className="sign-in-form">
                Password: </label>
                <input className="signin-box" type ="text" name="password" value = {loginInfo.password} onChange = {handleChange} />
            <input type = "submit" className="sign-in-form, submit-button"/>
        </form>
        </div> 
        </div>
        <NewAccount />
      
        </div>
   
  )
}
